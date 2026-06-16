/* ============================================================
   GLOBAL STATE
   ============================================================ */
var defaultState = {
    currentSceneId: "P0_1_SAY_GOODBYE",
    // Variable sesuai master plan
    trust_sara_score: 0,        // range: -5 to +10
    bimo_knows_truth: false,    // bool
    bimo_trust_score: 0,        // range: -3 to +6
    baskoro_suspicious: 0,      // range: 0 to 10
    archive_integrity: 100,     // turun dari 100
    network_stability: 100,     // turun dari 100
    arka_resolve: 0,            // naik dari 0
    historical_fragments: 0,    // naik dari 0
    // Flags tambahan
    interrogation_score: 0,
    sara_truth: false,
    lied_to_bimo: 0,
    quizPassed: false,
    // Engine state
    isTyping: false,
    typewriterTimeout: null,
    dialoguePages: [],
    currentPageIndex: 0,
    pageComplete: false,
    currentScene: null,
    currentBgmAudio: null,
    currentSfxAudio: null,
    audioUnlocked: false,
    pendingBgm: null,
    pendingSfx: null
};

var START_SCENE_ID = "P0_1_SAY_GOODBYE";
var gameState = JSON.parse(JSON.stringify(defaultState));
var dialogLog = [];

if (typeof storyData === "undefined") {
    var storyData = {
        P0_1_SAY_GOODBYE: {
            id: "P0_1_SAY_GOODBYE", characterName: "Sistem", characterSprite: "",
            dialogueText: "File story-data.js tidak terbaca.",
            expression: "normal", bgImage: "", bgm: "", sfx: "", choices: [], nextSceneId: ""
        }
    };
}

/* ============================================================
   VARIABLE SYSTEM
   ============================================================ */
function getVar(name) {
    return gameState.hasOwnProperty(name) ? gameState[name] : 0;
}

function modifyVar(name, value) {
    if (!gameState.hasOwnProperty(name)) return;
    if (typeof gameState[name] === "boolean") {
        gameState[name] = value;
        return;
    }
    if (typeof gameState[name] === "number") {
        gameState[name] += value;
        // Variables yang boleh negatif: trust_sara_score, bimo_trust_score
        // Variables yang di-clamp 0-100: archive_integrity, network_stability, baskoro_suspicious
        if (name === "archive_integrity" || name === "network_stability" || name === "baskoro_suspicious") {
            gameState[name] = Math.max(0, Math.min(100, gameState[name]));
        }
        if (name === "historical_fragments" || name === "arka_resolve" || name === "interrogation_score") {
            gameState[name] = Math.max(0, gameState[name]);
        }
    }
}

function setVar(name, value) {
    gameState[name] = value;
}

function checkCondition(condStr) {
    if (!condStr || condStr === "") return true;
    try {
        var safe = condStr
            .replace(/\btrust_sara_score\b/g, "gameState.trust_sara_score")
            .replace(/\bbimo_trust_score\b/g, "gameState.bimo_trust_score")
            .replace(/\bbimo_knows_truth\b/g, "gameState.bimo_knows_truth")
            .replace(/\bbaskoro_suspicious\b/g, "gameState.baskoro_suspicious")
            .replace(/\barchive_integrity\b/g, "gameState.archive_integrity")
            .replace(/\bnetwork_stability\b/g, "gameState.network_stability")
            .replace(/\barka_resolve\b/g, "gameState.arka_resolve")
            .replace(/\bhistorical_fragments\b/g, "gameState.historical_fragments")
            .replace(/\binterrogation_score\b/g, "gameState.interrogation_score")
            .replace(/\bsara_truth\b/g, "gameState.sara_truth")
            .replace(/\blied_to_bimo\b/g, "gameState.lied_to_bimo")
            .replace(/\bquizPassed\b/g, "gameState.quizPassed");
        return eval(safe);
    } catch (e) {
        console.error("[Condition] Error evaluating:", condStr, e);
        return false;
    }
}

function getEndingRoute() {
    var ts = getVar("trust_sara_score");
    var bt = getVar("bimo_trust_score");
    var bs = getVar("baskoro_suspicious");
    var ai = getVar("archive_integrity");
    var ns = getVar("network_stability");
    var ar = getVar("arka_resolve");
    var hf = getVar("historical_fragments");

    // True Ending: semua syarat terpenuhi
    if (ts >= 6 && bt >= 3 && bs <= 5 && ai >= 70 && ns >= 50 && hf >= 5 && ar >= 4) return "ending_sinkron_1";

    // Game Over: stabilitas terlalu rendah
    if (ns <= 0 || bs >= 9) return "ending_gameover";

    // Sad Ending: trust rendah atau stabilitas rendah
    if (ts <= -3 || ns <= 25) return "ending_restart_1";

    // Bittersweet: arsip terlalu rusak tapi jaringan stabil
    if (ai <= 40 && ns >= 60) return "ending_hapus_1";

    // Default: tergantung pilihan final
    return "ending_sinkron_1";
}

/* ============================================================
   SAVE / LOAD SYSTEM
   ============================================================ */
function saveGame() {
    try {
        var saveData = JSON.parse(JSON.stringify(gameState));
        delete saveData.isTyping;
        delete saveData.typewriterTimeout;
        delete saveData.currentBgmAudio;
        delete saveData.currentSfxAudio;
        delete saveData.audioUnlocked;
        delete saveData.pendingBgm;
        delete saveData.pendingSfx;
        saveData.dialogLogLength = dialogLog.length;
        localStorage.setItem("gema_nusanet_save", JSON.stringify(saveData));
        showSaveNotification("Game berhasil disimpan!");
    } catch (e) {
        console.error("[Save] Error:", e);
        showSaveNotification("Gagal menyimpan game!");
    }
}

function loadGame() {
    try {
        var data = localStorage.getItem("gema_nusanet_save");
        if (!data) { showSaveNotification("Tidak ada data save!"); return; }
        var saveData = JSON.parse(data);
        var keys = Object.keys(defaultState);
        for (var i = 0; i < keys.length; i++) {
            if (saveData.hasOwnProperty(keys[i])) {
                gameState[keys[i]] = saveData[keys[i]];
            }
        }
        dialogLog = [];
        stopAllAudio();
        renderScene(gameState.currentSceneId);
        showSaveNotification("Game berhasil dimuat!");
    } catch (e) {
        console.error("[Load] Error:", e);
        showSaveNotification("Gagal memuat game!");
    }
}

function hasSaveData() {
    return localStorage.getItem("gema_nusanet_save") !== null;
}

function showSaveNotification(msg) {
    var notif = document.getElementById("save-notification");
    if (!notif) {
        notif = document.createElement("div");
        notif.id = "save-notification";
        notif.style.cssText = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.85);border:1px solid #c084fc;color:#c084fc;padding:12px 24px;border-radius:10px;z-index:9000;font-size:.85rem;pointer-events:none;opacity:0;transition:opacity .3s";
        document.body.appendChild(notif);
    }
    notif.textContent = msg;
    notif.style.opacity = "1";
    setTimeout(function() { notif.style.opacity = "0"; }, 2000);
}

/* ============================================================
   PRELOADING
   ============================================================ */
var imageAssets = [
    "assets/images/bg_sunrise_jakarta.png",
    "assets/images/bg_kamar_arka_malam.png",
    "assets/images/bg_kamar_arka_monitor_closeup.png",
    "assets/images/bg_kamar_arka_pagi.png",
    "assets/images/bg_kamar_arka_sunyi.png",
    "assets/images/bg_kampus_kantin.png",
    "assets/images/bg_lab_kampus.png",
    "assets/images/bg_lab_kampus_sore.png",
    "assets/images/bg_arsip_digital_1945.png",
    "assets/images/bg_arsip_digital_1945_closeup.png",
    "assets/images/bg_persimpangan_jalan.png",
    "assets/images/bg_kota_malam.png",
    "assets/images/bg_whirlpool_digital.png",
    "assets/images/bg_nusanet_crossroads.png",
    "assets/images/bg_nusanet_fading.png",
    "assets/images/bg_nusanet_gate_open.png",
    "assets/images/bg_nusanet_gate_partial.png",
    "assets/images/bg_nusanet_panorama.png",
    "assets/images/bg_nusanet_plaza.png",
    "assets/images/bg_nusanet_rebuilding.png",
    "assets/images/bg_nusanet_reborn.png",
    "assets/images/bg_nusanet_skyline.png",
    "assets/images/bg_nusanet_verification_gate.png",
    "assets/images/bg_glitch_digital_void.png",
    "assets/images/bg_static_void.png",
    "assets/images/bg_white_void.png",
    "assets/images/bg_jalan_pemukiman.png",
    "assets/images/bg_stasiun_kereta.png",
    "assets/images/bg_minimarket_depan.png",
    "assets/images/bg_halte_busway.png",
    "assets/images/bg_warkop_sederhana.png",
    "assets/images/sprite_arka_normal.png",
    "assets/images/sprite_arka_smile.png",
    "assets/images/sprite_arka_sad.png",
    "assets/images/sprite_arka_think.png",
    "assets/images/sprite_arka_surprised.png",
    "assets/images/sprite_arka_worried.png",
    "assets/images/sprite_arka_afraid.png",
    "assets/images/sprite_arka_despair.png",
    "assets/images/sprite_arka_mirror.png",
    "assets/images/sprite_bimo_excited.png",
    "assets/images/sprite_bimo_afraid.png",
    "assets/images/sprite_bimo_confused.png",
    "assets/images/sprite_bimo_serious.png",
    "assets/images/sprite_pak_baskoro.png",
    "assets/images/sprite_sara_normal.png",
    "assets/images/sprite_sara_serious.png",
    "assets/images/sprite_sara_smile.png",
    "assets/images/sprite_sara_smile_bright.png",
    "assets/images/sprite_sara_worried.png",
    "assets/images/sprite_sara_hopeful.png",
    "assets/images/sprite_sara_sad.png",
    "assets/images/sprite_sara_fading.png",
    "assets/images/sprite_sara_glitch.png",
    "assets/images/ui_button_next_story.png",
    "assets/images/ui_pc_desktop.png",
    "assets/images/ui_phone_screen.png",
    "assets/images/ui_icon_chat.png",
    "assets/images/ui_icon_notes.png",
    "assets/images/cg_arka_riding_bus.png",
    "assets/images/cg_arka_arriving_kosan.png",
    "assets/images/cg_arka_entering_room.png",
    "assets/images/cg_arka_searching_room.png",
    "assets/images/cg_arka_sleeping_exhausted.png",
    "assets/images/cg_arka_say_goodbye.png",
    "assets/images/cg_arka_touch_anomaly.png",
    "assets/images/cg_arka_entering_portal.png",
    "assets/images/cg_arka_discovers_source.png",
    "assets/images/cg_arka_fighting_glitch.png",
    "assets/images/cg_arka_holding_core.png",
    "assets/images/cg_arka_portal_exit.png",
    "assets/images/cg_arka_defeated.png",
    "assets/images/cg_arka_victorious.png",
    "assets/images/cg_bimo_watching_news.png",
    "assets/images/bg_kampus_kelas.png",
    "assets/images/bg_kampus_lorong_ramai.png",
    "assets/images/bg_kampus_perpustakaan.png",
    "assets/images/bg_kampus_taman_siang.png",
    "assets/images/bg_kampus_malam.png",
    "assets/images/bg_kampus_taman_malam_leak.png",
    "assets/images/bg_lab_kampus_gelap.png",
    "assets/images/bg_nusanet_data_core.png",
    "assets/images/bg_mindscape_arka_overthinking.png",
    "assets/images/bg_mindscape_arka_determination.png",
    "assets/images/bg_nusanet_skyline.png",
    "assets/images/bg_arsip_bung_karno_orasi.png",
    "assets/images/bg_arsip_naskah_proklamasi.png",
    "assets/images/bg_arsip_pengibaran_bendera.png",
    "assets/images/bg_arsip_peta_gerilya.png",
    "assets/images/bg_arsip_selebaran_kemerdekaan.png",
    "assets/images/bg_arsip_suasana_jakarta_1945.png",
    "assets/images/bg_arsip_bendera_robek_surabaya.png",
    "assets/images/bg_arsip_monumen_proklamasi_digital.png"
];
var audioAssets = [
    "assets/audio/bgm_morning_calm.mp3",
    "assets/audio/bgm_rain_melancholic.mp3",
    "assets/audio/bgm_campus_life.mp3",
    "assets/audio/bgm_academic_warm.mp3",
    "assets/audio/bgm_tension_quiz.mp3",
    "assets/audio/bgm_tension_building.mp3",
    "assets/audio/bgm_epic_historical.mp3",
    "assets/audio/bgm_melancholic_hope.mp3",
    "assets/audio/bgm_cyberpunk_nusanet.mp3",
    "assets/audio/bgm_glitch_ambient.mp3",
    "assets/audio/bgm_hope_rising.mp3",
    "assets/audio/bgm_dawn_strings.mp3",
    "assets/audio/bgm_night_city.mp3",
    "assets/audio/bgm_dilemma_strings.mp3",
    "assets/audio/bgm_final_choice.mp3",
    "assets/audio/bgm_true_ending_triumphant.mp3",
    "assets/audio/bgm_bittersweet_piano.mp3",
    "assets/audio/bgm_bittersweet_ending.mp3",
    "assets/audio/bgm_sad_ending_solo_piano.mp3",
    "assets/audio/bgm_gameover_dark.mp3",
    "assets/audio/bgm_orchestral_finale.mp3",
    "assets/audio/sfx_bird_chirp.mp3",
    "assets/audio/sfx_crowd_chatter.mp3",
    "assets/audio/sfx_digital_suction.mp3",
    "assets/audio/sfx_distant_siren.mp3",
    "assets/audio/sfx_gate_unlock.mp3",
    "assets/audio/sfx_hologram_activate.mp3",
    "assets/audio/sfx_hujan_deras.mp3",
    "assets/audio/sfx_morning_bell.mp3",
    "assets/audio/sfx_notification_ping.mp3",
    "assets/audio/sfx_signal_fading.mp3",
    "assets/audio/sfx_silence.mp3",
    "assets/audio/sfx_sparkle_cascade.mp3",
    "assets/audio/sfx_sparkle.mp3",
    "assets/audio/sfx_static_low.mp3",
    "assets/audio/sfx_system_beep.mp3",
    "assets/audio/sfx_system_crash.mp3",
    "assets/audio/sfx_system_ready.mp3",
    "assets/audio/sfx_system_rebuild.mp3",
    "assets/audio/sfx_system_warning.mp3",
    "assets/audio/sfx_warning_siren.mp3",
    "assets/audio/sfx_ambient_digital_city.mp3",
    "assets/audio/bgm_battle_climax.mp3",
    "assets/audio/bgm_history_mystery.mp3",
    "assets/audio/bgm_journey_hope.mp3",
    "assets/audio/bgm_mindscape_anxiety.mp3",
    "assets/audio/bgm_triumphant_dawn.mp3",
    "assets/audio/bgm_urban_chill.mp3",
    "assets/audio/sfx_bus_interior.mp3",
    "assets/audio/sfx_door_lock_key.mp3",
    "assets/audio/sfx_energy_swoosh.mp3",
    "assets/audio/sfx_footsteps_concrete.mp3",
    "assets/audio/sfx_glitch_error.mp3",
    "assets/audio/sfx_glass_shatter.mp3",
    "assets/audio/sfx_keyboard_typing.mp3",
    "assets/audio/sfx_phone_touch.mp3",
    "assets/audio/sfx_system_beep.mp3"
];

function loadAssets(onProgress, onComplete) {
    var total = imageAssets.length + audioAssets.length;
    var loaded = 0;
    if (total <= 0) { onComplete(); return; }
    function itemLoaded() {
        loaded++;
        var pct = Math.round((loaded / total) * 100);
        onProgress(pct, loaded, total);
        if (loaded >= total) onComplete();
    }
    imageAssets.forEach(function(src) {
        var done = false;
        function once() { if (done) return; done = true; itemLoaded(); }
        var img = new Image();
        img.onload = once; img.onerror = once; img.src = src;
        setTimeout(once, 3000);
    });
    audioAssets.forEach(function(src) {
        var done = false;
        function once() { if (done) return; done = true; itemLoaded(); }
        var aud = new Audio();
        aud.preload = "metadata";
        aud.onloadedmetadata = once; aud.onerror = once; aud.src = src;
        setTimeout(once, 3000);
    });
}

/* ============================================================
   INITIALIZATION
   ============================================================ */
function init() {
    var bar = document.getElementById("loading-bar");
    var txt = document.getElementById("loading-text");

    // Always start fresh — no auto-load
    hideAllOverlays();

    loadAssets(
        function(pct) { bar.style.width = pct + "%"; txt.textContent = "Memuat aset... " + pct + "%"; },
        function() {
            txt.textContent = "Siap!";
            setTimeout(function() {
                document.getElementById("loading-screen").classList.add("fade-out");
                setTimeout(function() {
                    document.getElementById("loading-screen").style.display = "none";
                    document.getElementById("game-container").style.display = "block";
                    // Start new game from P0_1_SAY_GOODBYE
                    startNewGame();
                }, 800);
            }, 400);
        }
    );
    document.getElementById("dialog-box").addEventListener("click", handleContinue);
    document.getElementById("btn-log").addEventListener("click", toggleLog);
    document.getElementById("btn-close-log").addEventListener("click", toggleLog);
    document.getElementById("btn-save").addEventListener("click", saveGame);
    document.getElementById("btn-load").addEventListener("click", loadGame);
}

/* ============================================================
   AUDIO SYSTEM
   ============================================================ */
function resolveAudioUrl(src) {
    try { return new URL(src, window.location.href).href; } catch (e) { return src; }
}
function safePauseAudio(audio) {
    if (!audio) return;
    try { if (!audio.paused && !audio.ended) audio.pause(); } catch (e) {}
}
function safePlayAudio(audio, type) {
    try {
        var promise = audio.play();
        if (promise && typeof promise.catch === "function") {
            promise.catch(function(e) {
                if (e && e.name === "NotAllowedError") {
                    if (type === "bgm") gameState.pendingBgm = audio;
                    if (type === "sfx") gameState.pendingSfx = audio;
                }
            });
        }
    } catch (e) {
        if (type === "bgm") gameState.pendingBgm = audio;
        if (type === "sfx") gameState.pendingSfx = audio;
    }
}
function stopBGM() {
    safePauseAudio(gameState.currentBgmAudio);
    if (gameState.currentBgmAudio) {
        try { gameState.currentBgmAudio.currentTime = 0; } catch (e) {}
        gameState.currentBgmAudio = null;
    }
}
function stopSFX() {
    safePauseAudio(gameState.currentSfxAudio);
    if (gameState.currentSfxAudio) {
        try { gameState.currentSfxAudio.currentTime = 0; } catch (e) {}
        gameState.currentSfxAudio = null;
    }
}
function stopAllAudio() { stopBGM(); stopSFX(); }
function playBGM(src) {
    if (!src) return;
    var nextUrl = resolveAudioUrl(src);
    if (gameState.currentBgmAudio && gameState.currentBgmAudio.src === nextUrl && !gameState.currentBgmAudio.paused) return;
    if (gameState.currentBgmAudio && gameState.currentBgmAudio.src !== nextUrl) safePauseAudio(gameState.currentBgmAudio);
    var audio = new Audio(src);
    audio.loop = true; audio.volume = 0.5;
    gameState.currentBgmAudio = audio;
    safePlayAudio(audio, "bgm");
}
function playSFX(src, callback) {
    if (!src) { if (callback) callback(); return; }
    stopSFX();
    var audio = new Audio(src);
    audio.volume = 0.8;
    gameState.currentSfxAudio = audio;
    safePlayAudio(audio, "sfx");
    audio.onended = function() {
        if (gameState.currentSfxAudio === audio) gameState.currentSfxAudio = null;
        if (callback) callback();
    };
}
function unlockPendingAudio() {
    if (!gameState.audioUnlocked) {
        gameState.audioUnlocked = true;
        if (gameState.pendingBgm) { safePlayAudio(gameState.pendingBgm, "bgm"); gameState.pendingBgm = null; }
        if (gameState.pendingSfx) { safePlayAudio(gameState.pendingSfx, "sfx"); gameState.pendingSfx = null; }
    }
}

/* ============================================================
   BACKGROUND & SPRITE
   ============================================================ */
function setSceneBackground(src) {
    var bg = document.getElementById("bg-layer");
    if (!bg) { console.error("[BG] bg-layer element not found!"); return; }
    
    if (!src) {
        bg.style.backgroundImage = "none";
        bg.style.backgroundColor = "#0a0a0a";
        return;
    }
    
    console.log("[BG] Loading image:", src);
    var img = new Image();
    img.onload = function() {
        console.log("[BG] Image loaded successfully:", src);
        bg.style.backgroundImage = "linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.75)), url('" + src + "')";
        bg.style.backgroundSize = "cover";
        bg.style.backgroundPosition = "center";
        bg.style.backgroundRepeat = "no-repeat";
        bg.style.backgroundColor = "#000";
    };
    img.onerror = function() {
        console.error("[BG] FAILED to load image:", src);
        bg.style.backgroundImage = "none";
        bg.style.backgroundColor = "#200";
    };
    img.src = src;
}

/* ============================================================
   PAGINATION SYSTEM
   ============================================================ */
function paginateText(fullText) {
    if (!fullText || fullText.trim() === "") return [""];

    var dialogueEl = document.getElementById("dialogue-text");
    var container = dialogueEl.parentElement;
    var maxH = dialogueEl.clientHeight || 150;

    var rawPages = fullText.split(/\n\n+/);
    var pages = [];

    for (var r = 0; r < rawPages.length; r++) {
        var block = rawPages[r].trim();
        if (block === "") continue;

        dialogueEl.textContent = "";
        dialogueEl.style.maxHeight = maxH + "px";
        dialogueEl.textContent = block;

        if (dialogueEl.scrollHeight <= maxH + 5) {
            pages.push(block);
        } else {
            dialogueEl.textContent = "";
            var sentences = block.match(/[^.!?…]+[.!?…]+\s*|[^.!?…]+$/g) || [block];
            var current = "";
            for (var s = 0; s < sentences.length; s++) {
                var test = current + sentences[s];
                dialogueEl.textContent = test;
                if (dialogueEl.scrollHeight > maxH + 5 && current !== "") {
                    pages.push(current.trim());
                    current = sentences[s];
                } else {
                    current = test;
                }
            }
            if (current.trim() !== "") pages.push(current.trim());
        }
    }

    dialogueEl.textContent = "";
    if (pages.length === 0) pages.push(fullText);
    return pages;
}

function renderScene(sceneId) {
    try {
        gameState.currentSceneId = sceneId;
        var scene = storyData[sceneId];
        if (!scene) { console.error("[Engine] Scene not found:", sceneId); return; }

        stopAllAudio();

        if (scene.type === "freeplay") { enterFreePlay(scene); return; }

        exitFreePlay();

        if (scene.condition && !checkCondition(scene.condition)) {
            var fallback = scene.failSceneId || scene.nextSceneId;
            if (fallback) renderScene(fallback);
            return;
        }

        gameState.currentScene = scene;

        setSceneBackground(scene.bgImage || "");

        var spriteEl = document.getElementById("character-sprite");
        spriteEl.onerror = function() { this.classList.add("hidden-sprite"); };
        if (scene.characterSprite) { spriteEl.src = scene.characterSprite; spriteEl.classList.remove("hidden-sprite"); }
        else { spriteEl.src = ""; spriteEl.classList.add("hidden-sprite"); }

        if (scene.expression === "glitch") spriteEl.classList.add("glitch-effect");
        else spriteEl.classList.remove("glitch-effect");

        var nameEl = document.getElementById("char-name");
        if (scene.characterName && scene.characterName !== "") { nameEl.textContent = scene.characterName; nameEl.classList.remove("hidden-name"); }
        else { nameEl.textContent = ""; nameEl.classList.add("hidden-name"); }

        if (scene.bgm) playBGM(scene.bgm);
        if (scene.sfx) playSFX(scene.sfx);

        document.getElementById("dialog-box").style.display = "block";
        document.getElementById("choices-container").classList.add("hidden-choices");

        var fullText = scene.dialogueText || "";
        var pages = paginateText(fullText);

        if (scene.characterName || fullText) {
            dialogLog.push({ name: scene.characterName || "Narator", text: fullText });
        }

        gameState.dialoguePages = pages;
        gameState.currentPageIndex = 0;
        showCurrentPage();
    } catch (error) {
        console.error("[Engine] Render error:", error);
    }
}

function showCurrentPage() {
    var pages = gameState.dialoguePages;
    var idx = gameState.currentPageIndex;
    var dialogueEl = document.getElementById("dialogue-text");
    var pageInd = document.getElementById("page-indicator");
    var nextInd = document.getElementById("next-indicator");

    if (pages.length > 1) {
        pageInd.textContent = (idx + 1) + " / " + pages.length;
        pageInd.classList.add("visible");
    } else {
        pageInd.classList.remove("visible");
    }

    nextInd.style.display = "none";
    startTypewriter(dialogueEl, pages[idx], function() {
        gameState.pageComplete = true;
        if (idx < pages.length - 1) {
            nextInd.textContent = "▼ Klik untuk halaman berikutnya";
            nextInd.style.display = "block";
        } else {
            onLastPageComplete();
        }
    });
}

function onLastPageComplete() {
    var scene = gameState.currentScene;
    var nextInd = document.getElementById("next-indicator");
    var pageInd = document.getElementById("page-indicator");

    pageInd.classList.remove("visible");

    if (scene.choices && scene.choices.length > 0) {
        nextInd.style.display = "none";
        renderChoices(scene.choices, scene.timeLimit);
    } else {
        nextInd.textContent = "▼ Klik untuk melanjutkan";
        nextInd.style.display = "block";
    }
}

function startTypewriter(el, text, callback) {
    if (gameState.typewriterTimeout) { clearTimeout(gameState.typewriterTimeout); gameState.isTyping = false; }
    el.textContent = "";
    var i = 0;
    gameState.isTyping = true;
    gameState.pageComplete = false;

    function type() {
        if (i < text.length && gameState.isTyping) {
            el.textContent += text.charAt(i); i++;
            gameState.typewriterTimeout = setTimeout(type, 25);
        } else {
            gameState.isTyping = false;
            el.textContent = text;
            if (callback) callback();
        }
    }
    type();

    document.getElementById("dialog-box").onclick = function() {
        unlockPendingAudio();
        if (gameState.isTyping) {
            gameState.isTyping = false;
            clearTimeout(gameState.typewriterTimeout);
            el.textContent = text;
            if (callback) callback();
        } else {
            handleContinue();
        }
    };
}

function handleContinue() {
    unlockPendingAudio();
    var scene = gameState.currentScene;
    if (!scene) return;
    if (scene.choices && scene.choices.length > 0 && gameState.pageComplete && gameState.currentPageIndex >= gameState.dialoguePages.length - 1) return;

    if (!gameState.pageComplete) return;

    if (gameState.currentPageIndex < gameState.dialoguePages.length - 1) {
        gameState.currentPageIndex++;
        showCurrentPage();
        return;
    }

    if (scene.endingRoute) {
        var route = getEndingRoute();
        renderScene(route);
        return;
    }

    if (scene.nextSceneId && scene.nextSceneId !== "") renderScene(scene.nextSceneId);
}

/* ============================================================
   CHOICES & QUIZ TIMER
   ============================================================ */
function renderChoices(choices, timeLimit) {
    var container = document.getElementById("choices-container");
    container.innerHTML = ""; container.classList.remove("hidden-choices");
    document.getElementById("dialog-box").style.display = "none";

    if (timeLimit && timeLimit > 0) {
        var timerBar = document.createElement("div");
        timerBar.className = "quiz-timer-bar";
        var timerFill = document.createElement("div");
        timerFill.className = "quiz-timer-fill";
        timerFill.style.width = "100%";
        container.appendChild(timerBar);
        timerBar.appendChild(timerFill);
        setTimeout(function() {
            timerFill.style.transition = "width " + timeLimit + "s linear";
            timerFill.style.width = "0%";
        }, 50);
        gameState.quizTimer = setTimeout(function() {
            gameState.quizTimer = null;
            handleChoice(1);
        }, timeLimit * 1000);
    }

    choices.forEach(function(choice, idx) {
        var btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text;
        btn.addEventListener("click", function() {
            if (gameState.quizTimer) { clearTimeout(gameState.quizTimer); gameState.quizTimer = null; }
            handleChoice(idx);
        });
        container.appendChild(btn);
    });
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function handleNext() {
    unlockPendingAudio();
    var scene = storyData[gameState.currentSceneId];
    if (!scene) return;
    if (scene.choices && scene.choices.length > 0) return;

    if (scene.endingRoute) {
        var route = getEndingRoute();
        renderScene(route);
        return;
    }

    if (scene.nextSceneId && scene.nextSceneId !== "") renderScene(scene.nextSceneId);
}

function resetGameState() {
    var keys = Object.keys(defaultState);
    for (var i = 0; i < keys.length; i++) {
        gameState[keys[i]] = defaultState[keys[i]];
    }
    gameState = JSON.parse(JSON.stringify(defaultState));
    dialogLog = [];
    stopAllAudio();
    if (gameState.quizTimer) { clearTimeout(gameState.quizTimer); gameState.quizTimer = null; }
}

function hideAllOverlays() {
    var overlays = ["pc-overlay", "phone-overlay", "mirror-overlay", "static-overlay", "fp-dialog-box"];
    overlays.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) { el.classList.remove("active"); el.style.display = "none"; }
    });
    document.getElementById("freeplay-hotspots").classList.remove("active");
}

function startNewGame() {
    localStorage.removeItem("gema_nusanet_save");
    resetGameState();
    hideAllOverlays();
    dialogLog = [];
    console.log("[Game] Starting scene:", START_SCENE_ID);
    console.log("[Game] Scene object:", storyData[START_SCENE_ID]);
    console.log("[Game] Scene bgImage:", storyData[START_SCENE_ID] ? storyData[START_SCENE_ID].bgImage : "NOT FOUND");
    renderScene(START_SCENE_ID);
}

function handleChoice(choiceIndex) {
    unlockPendingAudio();
    var scene = storyData[gameState.currentSceneId];
    if (!scene || !scene.choices || !scene.choices[choiceIndex]) return;
    var chosen = scene.choices[choiceIndex];

    if (chosen.resetGame) { resetGameState(); }

    if (chosen.effects) {
        var effectKeys = Object.keys(chosen.effects);
        for (var i = 0; i < effectKeys.length; i++) {
            var key = effectKeys[i];
            var val = chosen.effects[key];
            if (typeof val === "number") modifyVar(key, val);
            else setVar(key, val);
        }
    }

    var dialogueEl = document.getElementById("dialogue-text");
    var nameEl = document.getElementById("char-name");
    document.getElementById("dialog-box").style.display = "block";
    if (chosen.name) { nameEl.textContent = chosen.name; nameEl.classList.remove("hidden-name"); }
    dialogueEl.textContent = "";
    document.getElementById("choices-container").classList.add("hidden-choices");
    document.getElementById("page-indicator").classList.remove("visible");

    var fullText = chosen.text || "";
    var pages = paginateText(fullText);
    gameState.dialoguePages = pages;
    gameState.currentPageIndex = 0;
    gameState.currentScene = { choices: [], nextSceneId: chosen.nextSceneId || "" };

    dialogLog.push({ name: chosen.name || "Arka", text: fullText });
    showCurrentPage();
}

/* ============================================================
   LOG SYSTEM
   ============================================================ */
function toggleLog() {
    var overlay = document.getElementById("log-overlay");
    if (overlay.classList.contains("visible-log")) { overlay.classList.remove("visible-log"); return; }
    var content = document.getElementById("log-content");
    content.innerHTML = "";
    dialogLog.forEach(function(entry) {
        var div = document.createElement("div"); div.className = "log-entry";
        div.innerHTML = '<div class="log-name">' + entry.name + '</div><div class="log-text">' + entry.text + '</div>';
        content.appendChild(div);
    });
    overlay.classList.add("visible-log");
}

/* ============================================================
   FREE PLAY SYSTEM
   ============================================================ */
var freePlayState = {
    isActive: false,
    PC_checked: false,
    Phone_checked: false,
    Mirror_checked: false,
    Story_ready: false,
    currentOverlay: null
};

function enterFreePlay(scene) {
    freePlayState.isActive = true;
    freePlayState.PC_checked = false;
    freePlayState.Phone_checked = false;
    freePlayState.Mirror_checked = false;
    freePlayState.Story_ready = false;
    freePlayState.currentOverlay = null;

    // Hide main dialogue and button
    document.getElementById("dialog-box").style.display = "none";
    document.getElementById("choices-container").classList.add("hidden-choices");
    document.getElementById("character-sprite").classList.add("hidden-sprite");
    var btn = document.getElementById("btn-next-story");
    if (btn) { btn.classList.remove("enabled"); btn.classList.add("disabled"); btn.style.display = "none"; }

    setSceneBackground(scene.bgImage || "");
    if (scene.bgm) playBGM(scene.bgm);
    if (scene.sfxAmbient) { playSFX(scene.sfxAmbient); }

    document.getElementById("freeplay-hotspots").classList.add("active");
    // Reset hotspot visuals
    ["hotspot-pc","hotspot-phone","hotspot-mirror"].forEach(function(id){
        var el = document.getElementById(id);
        if(el) el.classList.remove("checked");
    });
    updateNextStoryButton();

    console.log("[FREEPLAY] Reset:", JSON.stringify({PC:freePlayState.PC_checked,Phone:freePlayState.Phone_checked,Mirror:freePlayState.Mirror_checked,Ready:freePlayState.Story_ready}));

    var fpMsg = scene.introText || "Kamarku gelap dan hujan di luar semakin deras...";
    showFpDialog("Arka", fpMsg);
}

function exitFreePlay() {
    freePlayState.isActive = false;
    document.getElementById("freeplay-hotspots").classList.remove("active");
    document.getElementById("fp-dialog-box").classList.remove("active");
    document.getElementById("dialog-box").style.display = "block";
    closeAllOverlays();
}

function showFpDialog(name, text) {
    document.getElementById("fp-char-name").textContent = name;
    document.getElementById("fp-dialogue-text").textContent = text;
    document.getElementById("fp-dialog-box").classList.add("active");
}

function dismissFpDialog() {
    document.getElementById("fp-dialog-box").classList.remove("active");
}

function checkStoryReady() {
    if (freePlayState.PC_checked && freePlayState.Phone_checked && freePlayState.Mirror_checked) {
        freePlayState.Story_ready = true;
    }
    updateNextStoryButton();
}

function updateNextStoryButton() {
    var btn = document.getElementById("btn-next-story");
    if (!btn) return;
    if (freePlayState.Story_ready) {
        btn.classList.remove("disabled");
        btn.classList.add("enabled");
        btn.style.display = "block";
        console.log("[FREEPLAY] All checked — button VISIBLE");
    } else {
        btn.classList.add("disabled");
        btn.classList.remove("enabled");
        btn.style.display = "none";
    }
}

function tryAdvanceStory() {
    unlockPendingAudio();
    if (!freePlayState.Story_ready) {
        playSFX("assets/audio/sfx_system_beep.mp3");
        showFpDialog("Arka", "Aku harus memeriksa PC, HP, dan cermin dulu sebelum melanjutkan.");
        return;
    }
    playSFX("assets/audio/sfx_gate_unlock.mp3");
    dismissFpDialog();
    var scene = storyData[gameState.currentSceneId];
    var nextId = scene ? scene.nextSceneId : "";
    setTimeout(function() { if (nextId) renderScene(nextId); }, 600);
}

function closeAllOverlays() {
    document.getElementById("pc-overlay").classList.remove("active");
    document.getElementById("phone-overlay").classList.remove("active");
    document.getElementById("mirror-overlay").classList.remove("active");
    document.getElementById("static-overlay").classList.remove("active");
}

function openPC() {
    unlockPendingAudio();
    playSFX("assets/audio/sfx_system_beep.mp3");
    freePlayState.currentOverlay = "pc";
    freePlayState.PC_checked = true;
    document.getElementById("pc-desktop").innerHTML = '<div class="pc-icon" onclick="openPCNotes()"><div class="pc-icon-img notes">📋</div><span class="pc-icon-label">Catatan Tugas</span></div><div class="pc-icon" onclick="openPCChat()"><div class="pc-icon-img chat">💬</div><span class="pc-icon-label">Chat Bimo</span></div>';
    document.getElementById("pc-overlay").classList.add("active");
    document.getElementById("hotspot-pc").classList.add("checked");
    checkStoryReady();
    console.log("[FREEPLAY] PC checked:", freePlayState.PC_checked);
}

function closePC() {
    playSFX("assets/audio/sfx_system_beep.mp3");
    document.getElementById("pc-overlay").classList.remove("active");
    freePlayState.currentOverlay = null;
    if (freePlayState.Story_ready) showFpDialog("Arka", "Aku sudah memeriksa semuanya. Sepertinya sudah waktunya melanjutkan...");
}

function openPCNotes() {
    playSFX("assets/audio/sfx_system_beep.mp3");
    var desktop = document.getElementById("pc-desktop");
    desktop.innerHTML = '<div class="pc-file-content"><h3>📋 Catatan Tugas Kuliah</h3><p><strong>Topik Skripsi:</strong> "Analisis Kebijakan Digital Indonesia"</p><p><strong>Dosen:</strong> Prof. Dr. Ratna Dewi</p><p><strong>Deadline:</strong> 2 minggu lagi</p><p>- Data survei belum lengkap<br>- Perlu wawancara pejabat Kemenkominfo<br>- Bimo bilang punya data yang bisa membantu</p></div><button class="pc-back-btn" onclick="openPC()">← Kembali</button>';
}

function openPCChat() {
    playSFX("assets/audio/sfx_system_beep.mp3");
    var desktop = document.getElementById("pc-desktop");
    desktop.innerHTML = '<div class="pc-file-content"><h3>💬 Chat dengan Bimo</h3><p><strong style="color:#22c55e">Bimo:</strong> "Bro, cek HP mu. Ada yang penting."</p><p><strong style="color:#22c55e">Bimo:</strong> "Aku nemu sesuatu soal proyek penelitianmu."</p><p><strong style="color:#3b82f6">Arka:</strong> "Oke, jam berapa?"</p><p><strong style="color:#22c55e">Bimo:</strong> "Siang aja, di kantin kampus."</p></div><button class="pc-back-btn" onclick="openPC()">← Kembali</button>';
}

function openPhone() {
    unlockPendingAudio();
    playSFX("assets/audio/sfx_notification_ping.mp3");
    freePlayState.Phone_checked = true;
    document.getElementById("phone-overlay").classList.add("active");
    document.getElementById("hotspot-phone").classList.add("checked");
    checkStoryReady();
    console.log("[FREEPLAY] Phone checked:", freePlayState.Phone_checked);
}

function closePhone() {
    document.getElementById("phone-overlay").classList.remove("active");
    if (freePlayState.Story_ready) showFpDialog("Arka", "Aku sudah memeriksa semuanya. Sepertinya sudah waktunya melanjutkan...");
}

function openMirror() {
    unlockPendingAudio();
    freePlayState.Mirror_checked = true;
    document.getElementById("static-overlay").classList.add("active");
    playSFX("assets/audio/sfx_static_low.mp3");
    document.getElementById("mirror-overlay").classList.add("active");
    document.getElementById("hotspot-mirror").classList.add("checked");
    checkStoryReady();
    console.log("[FREEPLAY] Mirror checked:", freePlayState.Mirror_checked);
}

function closeMirror() {
    document.getElementById("mirror-overlay").classList.remove("active");
    document.getElementById("static-overlay").classList.remove("active");
    if (freePlayState.Story_ready) showFpDialog("Arka", "Aku sudah memeriksa semuanya. Sepertinya sudah waktunya melanjutkan...");
}

/* ============================================================
   BOOT & DEBUG
   ============================================================ */
window.addEventListener("error", function(event) {
    console.error("[GLOBAL JS ERROR]", event.message, "at", event.filename, ":", event.lineno);
});

window.onload = init;
