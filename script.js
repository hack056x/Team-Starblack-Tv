// ============================================
// CONFIGURACIÓN Y DATOS
// ============================================

const USUARIOS = {
    'hacker056': '@hacker056',
    'Leon@056': 'Leon@056',
    'demo1': '123456',
    'demo2': '654321'
};

let usuarioActual = null;
let categoriaActual = "ENTRETENIMIENTO";

// Inicializar reproductor Video.js
let player = null;

// Base de datos de canales CON MINIATURAS REALES
const canalesData = {
    "live_tv": {
        "ENTRETENIMIENTO": [
            { 
                "title": "21TV Posadas", 
                "sources": ["https://iptv.ixfo.com.ar:30443/c21tv/hd/c21tv/playlist.m3u8"], 
                "thumbnail": "https://yt3.googleusercontent.com/vzjQOSi50LdlRSMHdQcXckQmIVAvvtPRCYroEPQZkZhK2SotmIs_VM9t3wWi_TOsg_80w2_r0w=s900-c-k-c0x00ffffff-no-rj",
                "views": "345K" 
            },
            { 
                "title": "ADN 40", 
                "sources": ["https://mdstrm.com/live-stream-playlist/60b578b060947317de7b57ac.m3u8"], 
                "thumbnail": "https://cloudfront-us-east-1.images.arcpublishing.com/tvazteca/S4OEFRGGVJAGFMISWZHNT7MXBE.jpg",
                "views": "189K" 
            },
            { 
                "title": "Azteca UNO", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/76.m3u8"], 
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAlS0KbR8HlPyBKHuEMwORejf_HFfTXJuQFQ&s",
                "views": "178K" 
            },
            { 
                "title": "Bravo TV", 
                "sources": ["https://redirector.rudo.video/hls-video/c54ac2799874375c81c1672abb700870537c5223/bravo/bravo.smil/playlist.m3u8?did=b2201035844768f58630b7eef"], 
                "thumbnail": "https://play-lh.googleusercontent.com/ncpvHSXSrKGLwpLDxZFnNbl-G8-r3x0C72pJCTDNF2js_Cqn0X4vpHQ9QvJffTencg",
                "views": "189K" 
            }
        ],
        "DEPORTES": [
            { 
                "title": "ESPN", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/386.m3u8"], 
                "thumbnail": "https://www.eluniverso.com/resizer/v2/B33DYSWWX5GLZBOIBE7VA4NZXU.jpg?auth=88760af694ce3f1abc7d55aacdf61ba32c77d55b541d7b104d2aa93738a19324&width=1031&height=670&quality=75&smart=true",
                "views": "345K" 
            },
            { 
                "title": "Zona TUDN", 
                "sources": ["https://linear-357.frequency.stream/dist/vizio/357/hls/master/playlist.m3u8"], 
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGrxgabvrmlO89mT9TOhb_i98lUpQt_YBpg&s",
                "views": "189K" 
            },
            { 
                "title": "Claro Sports", 
                "sources": ["https://jmp2.uk/plu-6320d2755e54db000783fd87.m3u8"], 
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ7KNos-HhVpitrvSaVjcvbBQz4AUBCDwQA&s",
                "views": "178K" 
            },
            { 
                "title": "BeinSports", 
                "sources": ["https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8"], 
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3D0f0ITVH5nvSc-SxbSzvChZ0eOmoCKSOSw&s",
                "views": "189K" 
            }
        ],
        "INFANTIL": [
            { 
                "title": "Cartoonito", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/132.m3u8"], 
                "thumbnail": "https://i.ytimg.com/vi/UVWQTChfB1o/maxresdefault.jpg",
                "views": "234K" 
            },
            { 
                "title": "Baby Shark", 
                "sources": ["https://jmp2.uk/plu-619d5e6a093e7c0007489211.m3u8"], 
                "thumbnail": "https://play-lh.googleusercontent.com/hK4isEEmawEWAsOeZ7RrpVz3ZnpuOQViK4mywvGav7fVaA34cjk4_01soy1XF5xWQg",
                "views": "189K" 
            },
            { 
                "title": "Reino Infantil", 
                "sources": ["https://jmp2.uk/plu-5f4d3d06fb60d8000781fce8.m3u8"], 
                "thumbnail": "https://m.media-amazon.com/images/M/MV5BMDY2NjZmOTctZGU3NC00ZjMyLWJhZTMtNThhMzRjMGJjNzAzXkEyXkFqcGc@._V1_.jpg",
                "views": "345K" 
            },
            { 
                "title": "Nickelodeon Clásico", 
                "sources": ["https://jmp2.uk/plu-6824cda00101510f9eeaa011.m3u8"], 
                "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpXR98rREJtLNW6s5JRiEjeKgHBLq8yrEBA&s",
                "views": "178K" 
            }
        ],
        "CINE Y SERIES": [
            { 
                "title": "AMC", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/29.m3u8"], 
                "thumbnail": "https://images.amcnetworks.com/amctv.la/wp-content/uploads/2014/10/imgd_1000_amc-generica.jpg",
                "views": "345K" 
            },
            { 
                "title": "Aurora Media Films", 
                "sources": ["https://cdn.streamhispanatv.net:3417/live/auroramflive.m3u8"], 
                "thumbnail": "https://yt3.googleusercontent.com/ytc/AIdro_mNKi2i9oqkaRu0gtoBNbnxXG0zW2zeAJDsGBujDdEBx8w=s900-c-k-c0x00ffffff-no-rj",
                "views": "234K" 
            },
            { 
                "title": "A&E", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/5.m3u8"], 
                "thumbnail": "https://yt3.googleusercontent.com/AwIdNlZg9hBu58JzKRrusD64k5dfTkNhP6OVHIi9S41asNdTltzf3mQBiNZhBKJy0ZTzPOLfVm4=s900-c-k-c0x00ffffff-no-rj",
                "views": "234K" 
            },
            { 
                "title": "AXN", 
                "sources": ["http://m3u.tvcluboficial.com/Reach.Bot/p6C/54.m3u8"], 
                "thumbnail": "https://yt3.googleusercontent.com/a70_uxHhHZQ_vwFfMALDjfnXuZiusm-6rxz6sH8jSl4uPLeU1NSFfHReTq3otUEl7dFrfTdRyg=s900-c-k-c0x00ffffff-no-rj",
                "views": "167K" 
            }
        ],
        "MUSICA": [
            { 
                "title": "MTV", 
                "sources": ["http://cfd-v4-service-channel-stitcher-use1-1.prd.pluto.tv/stitch/hls/channel/5cf96d351652631e36d4331f/master.m3u8?appName=web"], 
                "thumbnail": "https://logodownload.org/wp-content/uploads/2017/08/mtv-logo-0.png",
                "views": "178K" 
            },
            { 
                "title": "Telehit", 
                "sources": ["https://biza.tv:443/play/zoKTQGCKIi2VUgXcPWGpHHWfVkjFDbBh8m1w_M5PoM4/m3u8"], 
                "thumbnail": "https://static.wikia.nocookie.net/logos/images/4/4c/Telehit_2016.png",
                "views": "89K" 
            }
        ],
        "24/7": [
            { 
                "title": "Nation Z", 
                "sources": ["https://jmp2.uk/plu-66b3af1c3a4ad200081c7d03.m3u8"], 
                "thumbnail": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10982694_b_v12_aa.jpg",
                "views": "234K" 
            },
            { 
                "title": "Historias de Ultratumba", 
                "sources": ["https://jmp2.uk/plu-5f4d3696d938c900072679fd.m3u8"], 
                "thumbnail": "https://i.ytimg.com/vi/hCj2cpKmP8Y/maxresdefault.jpg",
                "views": "345K" 
            },
            { 
                "title": "CSI: Miami", 
                "sources": ["https://jmp2.uk/plu-63eb9255c111bc0008fe6ec4.m3u8"], 
                "thumbnail": "https://m.media-amazon.com/images/M/MV5BNGQ1NDZjMzQtMmE3OC00NWQ1LWJiOTItZWNkNmZlNWRmMTc5XkEyXkFqcGc@._V1_.jpg",
                "views": "156K" 
            }
        ]
    }
};

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar reproductor
    player = videojs('video-hls', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        fluid: true,
        html5: {
            hls: {
                enableLowInitialPlaylist: true,
                smoothQualityChange: true,
                overrideNative: true
            }
        }
    });
});

// ============================================
// FUNCIONES DE AUTENTICACIÓN
// ============================================

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    
    if (!username || !password) {
        errorDiv.textContent = 'Por favor ingresa usuario y contraseña';
        return;
    }
    
    if (USUARIOS[username] && USUARIOS[username] === password) {
        usuarioActual = username;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('app-container').style.display = 'flex';
        
        // Actualizar avatar
        document.getElementById('user-avatar').innerHTML = username.charAt(0).toUpperCase();
        
        inicializarCategorias();
        mostrarCategoria("ENTRETENIMIENTO");
        actualizarFecha();
        
        // Configurar búsqueda
        setupSearch();
    } else {
        errorDiv.textContent = 'Usuario o contraseña incorrectos';
    }
}

// ============================================
// FUNCIONES DE BÚSQUEDA
// ============================================

function setupSearch() {
    const searchInput = document.getElementById('buscador-header');
    const suggestionsDiv = document.getElementById('search-suggestions');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length < 2) {
            suggestionsDiv.classList.remove('active');
            return;
        }
        
        const resultados = buscarEnTodosCanales(query);
        mostrarSugerencias(resultados.slice(0, 5));
    });
    
    // Cerrar sugerencias al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
            suggestionsDiv.classList.remove('active');
        }
    });
    
    // Buscar al presionar Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            buscarCanales();
        }
    });
}

function buscarEnTodosCanales(query) {
    const resultados = [];
    
    // Buscar en TODAS las categorías
    for (const [categoria, canales] of Object.entries(canalesData.live_tv)) {
        canales.forEach(canal => {
            if (canal.title.toLowerCase().includes(query)) {
                resultados.push({
                    titulo: canal.title,
                    categoria: categoria,
                    thumbnail: canal.thumbnail || `https://via.placeholder.com/320x180/1a1a1a/ff0000?text=${encodeURIComponent(canal.title.substring(0, 20))}`,
                    urls: canal.sources || [canal.url],
                    views: canal.views || '45K'
                });
            }
        });
    }
    
    return resultados;
}

function mostrarSugerencias(resultados) {
    const suggestionsDiv = document.getElementById('search-suggestions');
    suggestionsDiv.innerHTML = '';
    
    if (resultados.length === 0) {
        suggestionsDiv.innerHTML = '<div class="suggestion-item">No se encontraron canales</div>';
        suggestionsDiv.classList.add('active');
        return;
    }
    
    resultados.forEach(resultado => {
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        item.innerHTML = `
            <i class="fas fa-tv"></i>
            <div class="suggestion-info">
                <div class="suggestion-title">${resultado.titulo}</div>
                <div class="suggestion-category">${resultado.categoria}</div>
            </div>
        `;
        
        // Al hacer clic en la sugerencia, mostrar el canal
        item.onclick = () => {
            document.getElementById('buscador-header').value = resultado.titulo;
            suggestionsDiv.classList.remove('active');
            
            // Mostrar SOLO este canal en los resultados
            mostrarResultadosBusqueda([resultado]);
            
            // Actualizar título para indicar que es resultado de búsqueda
            document.getElementById('categoria-titulo').textContent = `Resultado: ${resultado.titulo}`;
            
            // Limpiar el active de las categorías
            document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        };
        
        suggestionsDiv.appendChild(item);
    });
    
    suggestionsDiv.classList.add('active');
}

function buscarCanales() {
    const query = document.getElementById('buscador-header').value.trim().toLowerCase();
    
    if (!query) {
        mostrarCategoria(categoriaActual);
        return;
    }
    
    const resultados = buscarEnTodosCanales(query);
    
    if (resultados.length > 0) {
        document.getElementById('categoria-titulo').textContent = `Resultados: "${query}" (${resultados.length})`;
        mostrarResultadosBusqueda(resultados);
        
        // Limpiar el active de las categorías
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
    } else {
        const listaDiv = document.getElementById('lista');
        listaDiv.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No se encontraron canales para "${query}"</p>
            </div>
        `;
    }
}

function mostrarResultadosBusqueda(resultados) {
    const listaDiv = document.getElementById('lista');
    listaDiv.innerHTML = '';
    
    resultados.forEach(resultado => {
        const primerUrl = resultado.urls[0];
        const iniciales = resultado.titulo.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
        
        const card = document.createElement('div');
        card.className = 'channel-card';
        card.onclick = () => {
            play(primerUrl);
            document.getElementById('current-channel').innerHTML = `<i class="fas fa-play"></i> ${resultado.titulo}`;
            document.getElementById('viewer-count').textContent = resultado.views;
        };
        
        card.innerHTML = `
            <div class="channel-thumbnail">
                <img src="${resultado.thumbnail}" 
                     onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ff0000?text=${encodeURIComponent(resultado.titulo.substring(0, 20))}'">
                <div class="duration">EN VIVO</div>
                <div class="badge">${resultado.categoria.substring(0, 3)}</div>
            </div>
            <div class="channel-info">
                <div class="channel-icon">${iniciales}</div>
                <div class="channel-details">
                    <div class="channel-name">
                        ${resultado.titulo}
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="channel-meta">
                        <span><i class="fas fa-eye"></i> ${resultado.views}</span>
                        <span><i class="fas fa-video"></i> ${resultado.urls.length}</span>
                    </div>
                </div>
            </div>
        `;
        
        listaDiv.appendChild(card);
    });
}

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function actualizarFecha() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = fecha.toLocaleDateString('es-ES', opciones);
}

function inicializarCategorias() {
    const categoriasDiv = document.getElementById('categorias');
    const categorias = Object.keys(canalesData.live_tv);
    
    const iconos = {
        'ENTRETENIMIENTO': 'fa-tv',
        'DEPORTES': 'fa-futbol',
        'INFANTIL': 'fa-child',
        'DOCUMENTALES': 'fa-leaf',
        'CINE Y SERIES': 'fa-film',
        'MUSICA': 'fa-music',
        'RELIGION': 'fa-church',
        '24/7': 'fa-clock'
    };
    
    categorias.forEach(cat => {
        const item = document.createElement('div');
        item.className = 'sidebar-item';
        item.innerHTML = `
            <i class="fas ${iconos[cat] || 'fa-circle'}"></i>
            <span>${cat}</span>
            <span class="count">${canalesData.live_tv[cat].length}</span>
        `;
        item.onclick = () => {
            mostrarCategoria(cat);
            
            // Limpiar el buscador
            document.getElementById('buscador-header').value = '';
            
            if (window.innerWidth < 1024) {
                toggleSidebar();
            }
            
            // Actualizar active class
            document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        };
        categoriasDiv.appendChild(item);
    });
    
    // Activar primera categoría
    if (categoriasDiv.firstChild) {
        categoriasDiv.firstChild.classList.add('active');
    }
}

function mostrarCategoria(categoria) {
    categoriaActual = categoria;
    document.getElementById('categoria-titulo').textContent = categoria;
    
    const listaDiv = document.getElementById('lista');
    listaDiv.innerHTML = '';
    
    const canales = canalesData.live_tv[categoria];
    
    canales.forEach(canal => {
        const nombre = canal.title;
        
        let urls = [];
        if (canal.sources && Array.isArray(canal.sources)) {
            urls = canal.sources;
        } else if (canal.url) {
            urls = [canal.url];
        }
        
        if (urls.length > 0) {
            const primerUrl = urls[0];
            const iniciales = nombre.split(' ').map(p => p[0]).join('').substring(0, 2).toUpperCase();
            
            const card = document.createElement('div');
            card.className = 'channel-card';
            card.onclick = () => {
                play(primerUrl);
                document.getElementById('current-channel').innerHTML = `<i class="fas fa-play"></i> ${nombre}`;
                document.getElementById('viewer-count').textContent = canal.views || '45K';
            };
            
            card.innerHTML = `
                <div class="channel-thumbnail">
                    <img src="${canal.thumbnail || `https://via.placeholder.com/320x180/1a1a1a/ff0000?text=${encodeURIComponent(nombre.substring(0, 20))}`}" 
                         onerror="this.src='https://via.placeholder.com/320x180/1a1a1a/ff0000?text=TV'">
                    <div class="duration">EN VIVO</div>
                    <div class="badge">HD</div>
                </div>
                <div class="channel-info">
                    <div class="channel-icon">${iniciales}</div>
                    <div class="channel-details">
                        <div class="channel-name">
                            ${nombre}
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="channel-meta">
                            <span><i class="fas fa-eye"></i> ${canal.views || '45K'}</span>
                            <span><i class="fas fa-video"></i> ${urls.length}</span>
                        </div>
                    </div>
                </div>
            `;
            
            listaDiv.appendChild(card);
        }
    });
}

function play(url) { 
    if (player) {
        player.src({ 
            src: url, 
            type: 'application/x-mpegURL' 
        }); 
        player.play(); 
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// ============================================
// FUNCIÓN PARA AGREGAR NUEVOS CANALES
// ============================================

// Ejemplo de cómo agregar un nuevo canal:
function agregarNuevoCanal(categoria, titulo, sources, thumbnail, views) {
    if (!canalesData.live_tv[categoria]) {
        console.error('Categoría no existe');
        return false;
    }
    
    const nuevoCanal = {
        title: titulo,
        sources: sources,
        thumbnail: thumbnail,
        views: views || '0K'
    };
    
    canalesData.live_tv[categoria].push(nuevoCanal);
    
    // Actualizar el contador en la sidebar
    actualizarContadorCategoria(categoria);
    
    // Si estamos en esta categoría, recargar
    if (categoriaActual === categoria) {
        mostrarCategoria(categoria);
    }
    
    return true;
}

function actualizarContadorCategoria(categoria) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        const span = item.querySelector('span');
        if (span && span.textContent === categoria) {
            const countSpan = item.querySelector('.count');
            if (countSpan) {
                countSpan.textContent = canalesData.live_tv[categoria].length;
            }
        }
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (window.innerWidth < 1024) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target) && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }
});

// Actualizar fecha cada minuto
setInterval(actualizarFecha, 60000);