const initialStructure = {
    matches: {
        // Preliminares (Bo5)
        p1: { id: 'p1', round: 'prelim', isBo7: false, p1: { name: 'GALI', seed: 15 }, p2: { name: 'MICAV', seed: 24 }, winner: null, score1: null, score2: null, nextMatch: 'o1', nextSlot: 'p2' },
        p2: { id: 'p2', round: 'prelim', isBo7: false, p1: { name: 'COMBITO', seed: 11 }, p2: { name: 'BIRY', seed: 17 }, winner: null, score1: null, score2: null, nextMatch: 'o2', nextSlot: 'p2' },
        p3: { id: 'p3', round: 'prelim', isBo7: false, p1: { name: 'GABI', seed: 10 }, p2: { name: 'CARBO', seed: 22 }, winner: null, score1: null, score2: null, nextMatch: 'o3', nextSlot: 'p2' },
        p4: { id: 'p4', round: 'prelim', isBo7: false, p1: { name: 'GOKU', seed: 12 }, p2: { name: 'NAHUEL', seed: 18 }, winner: null, score1: null, score2: null, nextMatch: 'o4', nextSlot: 'p2' },
        p5: { id: 'p5', round: 'prelim', isBo7: false, p1: { name: 'MONOZ', seed: 13 }, p2: { name: 'RODRIX', seed: 21 }, winner: null, score1: null, score2: null, nextMatch: 'o5', nextSlot: 'p2' },
        p6: { id: 'p6', round: 'prelim', isBo7: false, p1: { name: 'F1RE', seed: 9 }, p2: { name: 'FEDEX', seed: 20 }, winner: null, score1: null, score2: null, nextMatch: 'o6', nextSlot: 'p2' },
        p7: { id: 'p7', round: 'prelim', isBo7: false, p1: { name: 'WHOCL', seed: 14 }, p2: { name: 'ABOKEITO', seed: 23 }, winner: null, score1: null, score2: null, nextMatch: 'o7', nextSlot: 'p2' },
        p8: { id: 'p8', round: 'prelim', isBo7: false, p1: { name: 'TWIGG', seed: 16 }, p2: { name: 'IXAM', seed: 19 }, winner: null, score1: null, score2: null, nextMatch: 'o8', nextSlot: 'p2' },

        // Octavos (Bo5)
        o1: { id: 'o1', round: 'octavos', isBo7: false, p1: { name: 'HEARTTT', seed: 1 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q1', nextSlot: 'p1' },
        o2: { id: 'o2', round: 'octavos', isBo7: false, p1: { name: 'OZONE', seed: 8 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q1', nextSlot: 'p2' },
        o3: { id: 'o3', round: 'octavos', isBo7: false, p1: { name: 'DOGAO', seed: 4 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q2', nextSlot: 'p1' },
        o4: { id: 'o4', round: 'octavos', isBo7: false, p1: { name: 'KINGSTONE', seed: 5 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q2', nextSlot: 'p2' },
        o5: { id: 'o5', round: 'octavos', isBo7: false, p1: { name: 'CAPOCH', seed: 2 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q3', nextSlot: 'p1' },
        o6: { id: 'o6', round: 'octavos', isBo7: false, p1: { name: 'MIGUEL', seed: 7 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q3', nextSlot: 'p2' },
        o7: { id: 'o7', round: 'octavos', isBo7: false, p1: { name: 'LUCHO', seed: 3 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q4', nextSlot: 'p1' },
        o8: { id: 'o8', round: 'octavos', isBo7: false, p1: { name: 'PRISMA', seed: 6 }, p2: null, winner: null, score1: null, score2: null, nextMatch: 'q4', nextSlot: 'p2' },

        // Cuartos (Bo5)
        q1: { id: 'q1', round: 'cuartos', isBo7: false, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 's1', nextSlot: 'p1' },
        q2: { id: 'q2', round: 'cuartos', isBo7: false, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 's1', nextSlot: 'p2' },
        q3: { id: 'q3', round: 'cuartos', isBo7: false, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 's2', nextSlot: 'p1' },
        q4: { id: 'q4', round: 'cuartos', isBo7: false, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 's2', nextSlot: 'p2' },

        // Semis (Bo7)
        s1: { id: 's1', round: 'semis', isBo7: true, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 'f1', nextSlot: 'p1', loserMatch: 't1', loserSlot: 'p1' },
        s2: { id: 's2', round: 'semis', isBo7: true, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: 'f1', nextSlot: 'p2', loserMatch: 't1', loserSlot: 'p2' },

        // Finales (Bo7) y Tercero (Bo5)
        f1: { id: 'f1', round: 'final', isBo7: true, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: null },
        t1: { id: 't1', round: 'tercero', isBo7: false, p1: null, p2: null, winner: null, score1: null, score2: null, nextMatch: null, title: '3ER Y 4TO PUESTO' }
    }
};

const roundsLayout = [
    { id: 'prelim', title: 'RONDA PRELIMINAR', matches: ['p1','p2','p3','p4','p5','p6','p7','p8'] },
    { id: 'octavos', title: 'OCTAVOS DE FINAL', matches: ['o1','o2','o3','o4','o5','o6','o7','o8'] },
    { id: 'cuartos', title: 'CUARTOS DE FINAL', matches: ['q1','q2','q3','q4'] },
    { id: 'semis', title: 'SEMIFINALES', matches: ['s1','s2'] },
    { id: 'finals', title: 'FINAL', matches: ['f1', 't1'] }
];

let state = {
    user: { nick: '', email: '' },
    prediction: JSON.parse(JSON.stringify(initialStructure)),
    realResults: JSON.parse(JSON.stringify(initialStructure)),
    submissions: [] 
};

// Modal variables
let currentModalMatchId = null;

function loadState() {
    const saved = localStorage.getItem('prode_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        state.user = parsed.user || state.user;
        state.prediction = parsed.prediction || state.prediction;
        state.realResults = parsed.realResults || state.realResults;
        state.submissions = parsed.submissions || state.submissions;
    }
    document.getElementById('user-nick').value = state.user.nick;
    document.getElementById('user-email').value = state.user.email;
}

function saveState() {
    localStorage.setItem('prode_state', JSON.stringify({
        user: state.user,
        prediction: state.prediction,
        realResults: state.realResults,
        submissions: state.submissions
    }));
    updateRanking();
}

function clearDownstream(matches, matchId) {
    let match = matches[matchId];
    if (match.winner) {
        match.winner = null;
        match.score1 = null;
        match.score2 = null;
        if (match.nextMatch) {
            let nextM = matches[match.nextMatch];
            nextM[match.nextSlot] = null;
            clearDownstream(matches, match.nextMatch);
        }
        if (match.loserMatch) {
            let loserM = matches[match.loserMatch];
            loserM[match.loserSlot] = null;
            clearDownstream(matches, match.loserMatch);
        }
    }
}

// Open Modal for match score
function openScoreModal(matchId, isReal) {
    const currentMatches = isReal ? state.realResults.matches : state.prediction.matches;
    const match = currentMatches[matchId];
    
    if (!match.p1 || !match.p2) return; // Cannot play if players are undefined
    
    currentModalMatchId = matchId;
    
    document.getElementById('modal-match-title').textContent = `${match.p1.name} vs ${match.p2.name}`;
    document.getElementById('modal-match-type').textContent = match.isBo7 ? 'Mejor de 7' : 'Mejor de 5';
    
    const optionsContainer = document.getElementById('modal-score-options');
    optionsContainer.innerHTML = '';
    
    const requiredWins = match.isBo7 ? 4 : 3;
    
    // Generate scores where P1 wins
    for (let loserScore = 0; loserScore < requiredWins; loserScore++) {
        const btn = document.createElement('button');
        btn.className = 'score-btn p1-wins';
        btn.textContent = `${requiredWins} - ${loserScore}`;
        btn.onclick = () => setScore(requiredWins, loserScore, isReal);
        optionsContainer.appendChild(btn);
    }
    
    // Generate scores where P2 wins
    for (let loserScore = 0; loserScore < requiredWins; loserScore++) {
        const btn = document.createElement('button');
        btn.className = 'score-btn p2-wins';
        btn.textContent = `${loserScore} - ${requiredWins}`;
        btn.onclick = () => setScore(loserScore, requiredWins, isReal);
        optionsContainer.appendChild(btn);
    }
    
    document.getElementById('score-modal').classList.remove('hidden');
}

function closeScoreModal() {
    currentModalMatchId = null;
    document.getElementById('score-modal').classList.add('hidden');
}

document.getElementById('btn-close-modal').onclick = closeScoreModal;

function setScore(s1, s2, isReal) {
    const currentMatches = isReal ? state.realResults.matches : state.prediction.matches;
    const match = currentMatches[currentModalMatchId];
    
    const newWinner = s1 > s2 ? match.p1 : match.p2;
    const newLoser = s1 > s2 ? match.p2 : match.p1;
    
    if (match.winner && match.winner.name !== newWinner.name) {
        clearDownstream(currentMatches, currentModalMatchId);
    }
    
    match.score1 = s1;
    match.score2 = s2;
    match.winner = newWinner;
    
    // Advance winner
    if (match.nextMatch) {
        let nextM = currentMatches[match.nextMatch];
        nextM[match.nextSlot] = newWinner;
    }
    
    // Advance loser (for 3rd place match)
    if (match.loserMatch) {
        let loserM = currentMatches[match.loserMatch];
        loserM[match.loserSlot] = newLoser;
    }
    
    saveState();
    renderBracket(isReal ? 'real-bracket' : 'user-bracket', isReal);
    closeScoreModal();
}

function renderBracket(containerId, isReal) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    const currentMatches = isReal ? state.realResults.matches : state.prediction.matches;

    roundsLayout.forEach(round => {
        const roundDiv = document.createElement('div');
        roundDiv.className = `round ${round.id}`;
        
        const header = document.createElement('h3');
        header.className = 'round-header';
        header.textContent = round.title;
        roundDiv.appendChild(header);

        round.matches.forEach(matchId => {
            const match = currentMatches[matchId];
            
            if (match.title) {
                const subHeader = document.createElement('h4');
                subHeader.style.textAlign = 'center';
                subHeader.style.color = 'var(--accent)';
                subHeader.style.marginTop = '1rem';
                subHeader.style.fontFamily = "'Teko', sans-serif";
                subHeader.textContent = match.title;
                roundDiv.appendChild(subHeader);
            }

            const matchDiv = document.createElement('div');
            matchDiv.className = 'match';
            // Open modal on click instead of direct win
            matchDiv.style.cursor = 'pointer';
            matchDiv.onclick = () => openScoreModal(matchId, isReal);

            // P1
            const p1Div = document.createElement('div');
            p1Div.className = `player ${!match.p1 ? 'empty' : ''} ${match.winner && match.p1 && match.winner.name === match.p1.name ? 'winner' : ''}`;
            
            let p1ScoreHTML = match.score1 !== null ? `<span class="player-score">${match.score1}</span>` : '';
            if (match.p1) {
                p1Div.innerHTML = `<span class="seed">${match.p1.seed ? `(${match.p1.seed})` : ''}</span> <span>${match.p1.name}</span> ${p1ScoreHTML}`;
            } else {
                p1Div.innerHTML = `<span>Por definir</span>`;
            }
            
            // P2
            const p2Div = document.createElement('div');
            p2Div.className = `player ${!match.p2 ? 'empty' : ''} ${match.winner && match.p2 && match.winner.name === match.p2.name ? 'winner' : ''}`;
            
            let p2ScoreHTML = match.score2 !== null ? `<span class="player-score">${match.score2}</span>` : '';
            if (match.p2) {
                p2Div.innerHTML = `<span class="seed">${match.p2.seed ? `(${match.p2.seed})` : ''}</span> <span>${match.p2.name}</span> ${p2ScoreHTML}`;
            } else {
                if(match.round === 'octavos') {
                    let prelimId = Object.keys(currentMatches).find(k => currentMatches[k].nextMatch === matchId && currentMatches[k].nextSlot === 'p2');
                    if(prelimId) {
                        let prelimM = currentMatches[prelimId];
                        p2Div.innerHTML = `<span>Gan. (${prelimM.p1.seed} vs ${prelimM.p2.seed})</span>`;
                    } else {
                        p2Div.innerHTML = `<span>Por definir</span>`;
                    }
                } else {
                    p2Div.innerHTML = `<span>Por definir</span>`;
                }
            }

            matchDiv.appendChild(p1Div);
            matchDiv.appendChild(p2Div);
            roundDiv.appendChild(matchDiv);
            
            if (matchId === 'f1' && match.winner) {
                const champDiv = document.createElement('div');
                champDiv.style.textAlign = 'center';
                champDiv.style.marginTop = '1rem';
                champDiv.innerHTML = `<h3 style="color: gold; text-shadow: 0 0 10px gold; font-family: 'Teko', sans-serif; font-size: 2rem;">🏆 CAMPEÓN</h3><h2 style="color: #fff; font-family: 'Teko', sans-serif; font-size: 2.5rem;">${match.winner.name}</h2>`;
                roundDiv.appendChild(champDiv);
            }
            
            if (matchId === 't1' && match.winner) {
                const bronzeDiv = document.createElement('div');
                bronzeDiv.style.textAlign = 'center';
                bronzeDiv.style.marginTop = '1rem';
                bronzeDiv.innerHTML = `<h3 style="color: #cd7f32; text-shadow: 0 0 10px #cd7f32; font-family: 'Teko', sans-serif; font-size: 1.5rem;">🥉 3ER PUESTO</h3><h2 style="color: #fff; font-family: 'Teko', sans-serif; font-size: 2rem;">${match.winner.name}</h2>`;
                roundDiv.appendChild(bronzeDiv);
            }
        });
        
        container.appendChild(roundDiv);
    });
}

// Navigation Logic
document.getElementById('btn-prediccion').onclick = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-prediccion').classList.add('active');
    document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
    document.getElementById('view-prediccion').classList.remove('hidden');
    renderBracket('user-bracket', false);
};

document.getElementById('btn-real-results').onclick = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-real-results').classList.add('active');
    document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
    document.getElementById('view-real-results').classList.remove('hidden');
    renderBracket('real-bracket', true);
};

document.getElementById('btn-premios').onclick = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-premios').classList.add('active');
    document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
    document.getElementById('view-premios').classList.remove('hidden');
};

document.getElementById('btn-ranking').onclick = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-ranking').classList.add('active');
    document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
    document.getElementById('view-ranking').classList.remove('hidden');
    updateRanking();
};

document.getElementById('btn-admin').onclick = () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-admin').classList.add('active');
    document.querySelectorAll('main').forEach(m => m.classList.add('hidden'));
    document.getElementById('view-admin').classList.remove('hidden');
};

document.getElementById('user-nick').oninput = (e) => { state.user.nick = e.target.value; saveState(); };
document.getElementById('user-email').oninput = (e) => { state.user.email = e.target.value; saveState(); };

document.getElementById('btn-download').onclick = () => {
    if (!state.user.nick || !state.user.email) {
        alert("Por favor, completa tu Nick y Email antes de descargar.");
        return;
    }
    
    const hasNulls = Object.values(state.prediction.matches).some(m => !m.winner);
    if (hasNulls) {
        if (!confirm("Aún tienes partidos sin definir. ¿Estás seguro que quieres descargar la predicción incompleta?")) {
            return;
        }
    }

    const exportData = {
        nick: state.user.nick,
        email: state.user.email,
        prediction: state.prediction
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `prode_${state.user.nick.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

document.getElementById('file-predictions').addEventListener('change', function(e) {
    const files = e.target.files;
    if (files.length === 0) return;
    
    let loaded = 0;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const data = JSON.parse(evt.target.result);
                if (data.nick && data.email && data.prediction) {
                    const existingIndex = state.submissions.findIndex(s => s.email === data.email);
                    if (existingIndex >= 0) {
                        state.submissions[existingIndex] = data;
                    } else {
                        state.submissions.push(data);
                    }
                }
                loaded++;
                if (loaded === files.length) {
                    document.getElementById('upload-status').textContent = `Se cargaron ${loaded} predicciones correctamente.`;
                    saveState();
                    updateRanking();
                    document.getElementById('file-predictions').value = '';
                }
            } catch(err) {
                console.error("Error parsing JSON", err);
            }
        };
        reader.readAsText(file);
    }
});

document.getElementById('btn-clear-db').onclick = () => {
    if (confirm("¡ATENCIÓN! Esto borrará todas las predicciones subidas, resultados reales y tu predicción actual. ¿Estás seguro?")) {
        localStorage.removeItem('prode_state');
        state.user = { nick: '', email: '' };
        state.prediction = JSON.parse(JSON.stringify(initialStructure));
        state.realResults = JSON.parse(JSON.stringify(initialStructure));
        state.submissions = [];
        document.getElementById('user-nick').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('upload-status').textContent = '';
        renderBracket('user-bracket', false);
        renderBracket('real-bracket', true);
        updateRanking();
    }
};

function updateRanking() {
    const tbody = document.getElementById('ranking-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const realM = state.realResults.matches;
    
    const rankingData = state.submissions.map(sub => {
        let points = 0;
        let perfectMatches = 0;
        const subM = sub.prediction.matches;
        
        Object.keys(realM).forEach(matchId => {
            if (realM[matchId].winner && subM[matchId] && subM[matchId].winner) {
                if (realM[matchId].winner.name === subM[matchId].winner.name) {
                    if (realM[matchId].score1 === subM[matchId].score1 && 
                        realM[matchId].score2 === subM[matchId].score2) {
                        points += 2; // Exacto = 2 pts
                        perfectMatches += 1;
                    } else {
                        points += 1; // Solo Ganador = 1 pt
                    }
                }
            }
        });
        
        return {
            nick: sub.nick,
            email: sub.email,
            points: points,
            perfect: perfectMatches
        };
    });
    
    rankingData.sort((a, b) => b.points - a.points);
    
    rankingData.forEach((row, index) => {
        const tr = document.createElement('tr');
        if (index === 0) tr.className = 'podium-1';
        else if (index === 1) tr.className = 'podium-2';
        else if (index === 2) tr.className = 'podium-3';
        
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${row.nick}</td>
            <td>${row.email}</td>
            <td>${row.points} pts <small style="opacity: 0.6;">(${row.perfect} perfectos)</small></td>
        `;
        tbody.appendChild(tr);
    });
    
    if (rankingData.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="4" style="text-align: center; opacity: 0.5;">No hay predicciones subidas todavía.</td>`;
        tbody.appendChild(tr);
    }
}

// Init
loadState();
renderBracket('user-bracket', false);
renderBracket('real-bracket', true);
updateRanking();
