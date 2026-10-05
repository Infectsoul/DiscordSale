(() => {
  'use strict';

  const GUILD_ID = '246815328103825409';
  const CHANNEL_ID = '947606292376207490';
  const STOP_TEXT = 'Suggestions are now open.';
  const MESSAGE_URL = `https://discord.com/channels/${GUILD_ID}/${CHANNEL_ID}/`;

  const BTN_ATTR = 'data-sale-btn';
  const BUTTON_ICONS = {
    dark: {
      png: chrome.runtime.getURL('image/sale-dark.png'),
      gif: chrome.runtime.getURL('image/sale-dark.gif'),
    },
    light: {
      png: chrome.runtime.getURL('image/sale-light.png'),
      gif: chrome.runtime.getURL('image/sale-light.gif'),
    },
  };
  const MODAL_BRAND_GIF = chrome.runtime.getURL('image/sale.gif');

  const LANG_KEY = 'sale_lang';
  const THEME_KEY = 'sale_theme';
  const OPT_KEY = 'sale_optimize';
  const THEMES = ['dark', 'light', 'auto'];

  const LANGS = [
    { code: 'en', label: 'English', short: 'EN', img: chrome.runtime.getURL('image/GB.png') },
    { code: 'pt-br', label: 'Português (BR)', short: 'PT', img: chrome.runtime.getURL('image/BR.png') },
    { code: 'es', label: 'Español', short: 'ES', img: chrome.runtime.getURL('image/ES.png') },
  ];

  const LOCALES = { en: 'en-US', 'pt-br': 'pt-BR', es: 'es-ES' };

  const I18N = {
    en: {
      objects: 'Shaman Objects',
      item: 'item',
      items: 'items',
      found: 'found',
      loading: 'Loading…',
      fetching: 'Fetching messages…',
      fetchingSub: 'This may take a few seconds.',
      itemsFound: '{n} items found…',
      noneTitle: 'No items loaded',
      noneDesc: 'Use the refresh button to fetch the messages again.',
      nothingTitle: 'Nothing found',
      tryOther: 'Try another search term.',
      emptyCat: 'There are no items in this category.',
      colImage: 'Image',
      colCatId: 'Category / ID',
      colId: 'ID',
      colName: 'Name',
      colVotes: 'Votes',
      colMessage: 'Message',
      message: 'message',
      chosen: 'Chosen',
      vote: 'Vote',
      unvote: 'Remove vote',
      searchPlaceholder: 'Search by name or ID',
      searchLabel: 'Search items',
      clearSearch: 'Clear search',
      refresh: 'Refresh',
      close: 'Close',
      language: 'Language',
      copyList: 'Copy list',
      copyTitle: 'Copy list',
      copySubtitle: '{cat} · {n} in the current order',
      quantity: 'Quantity',
      first10: 'First 10',
      specific: 'Specific',
      allItems: 'All',
      format: 'Format',
      onePerLine: 'One per line',
      sameLine: 'Same line',
      separator: 'Separator',
      preview: 'Preview',
      selected: '{n} selected',
      copy: 'Copy',
      copied: 'Copied!',
      downloadJson: 'Download JSON',
      content: 'Content',
      fName: 'Item name',
      fId: 'ID',
      fCatId: 'Category + ID',
      fVotes: 'Votes',
      settings: 'Settings',
      theme: 'Theme',
      themeDark: 'Dark',
      themeLight: 'Light',
      themeAuto: 'Auto',
      themeAutoHint: 'Auto follows the Discord theme.',
      performance: 'Performance',
      optimization: 'Optimization mode',
      optimizationDesc: 'Replaces blur, glows and animations with simple darkening for a lighter interface.',
      zoomImage: 'View larger',
    },
    'pt-br': {
      objects: 'Objetos de Shaman',
      item: 'item',
      items: 'itens',
      found: 'encontrados',
      loading: 'Carregando…',
      fetching: 'Buscando mensagens…',
      fetchingSub: 'Isso pode levar alguns segundos.',
      itemsFound: '{n} itens encontrados…',
      noneTitle: 'Nenhum item carregado',
      noneDesc: 'Use o botão de atualizar para buscar as mensagens novamente.',
      nothingTitle: 'Nada encontrado',
      tryOther: 'Tente outro termo de busca.',
      emptyCat: 'Não há itens nesta categoria.',
      colImage: 'Imagem',
      colCatId: 'Categoria / ID',
      colId: 'ID',
      colName: 'Nome',
      colVotes: 'Votos',
      colMessage: 'Mensagem',
      message: 'mensagem',
      chosen: 'Escolhido',
      vote: 'Votar',
      unvote: 'Remover voto',
      searchPlaceholder: 'Buscar por nome ou ID',
      searchLabel: 'Buscar itens',
      clearSearch: 'Limpar busca',
      refresh: 'Atualizar',
      close: 'Fechar',
      language: 'Idioma',
      copyList: 'Copiar lista',
      copyTitle: 'Copiar lista',
      copySubtitle: '{cat} · {n} na ordem atual',
      quantity: 'Quantidade',
      first10: '10 primeiros',
      specific: 'Específico',
      allItems: 'Todos',
      format: 'Formato',
      onePerLine: 'Um por linha',
      sameLine: 'Mesma linha',
      separator: 'Separador',
      preview: 'Prévia',
      selected: '{n} selecionados',
      copy: 'Copiar',
      copied: 'Copiado!',
      downloadJson: 'Baixar JSON',
      content: 'Conteúdo',
      fName: 'Nome do item',
      fId: 'ID',
      fCatId: 'Categoria + ID',
      fVotes: 'Votos',
      settings: 'Configurações',
      theme: 'Tema',
      themeDark: 'Escuro',
      themeLight: 'Claro',
      themeAuto: 'Auto',
      themeAutoHint: 'Auto acompanha o tema do Discord.',
      performance: 'Desempenho',
      optimization: 'Modo otimização',
      optimizationDesc: 'Troca blur, brilhos e animações por um escurecimento simples, deixando a interface mais leve.',
      zoomImage: 'Ampliar imagem',
    },
    es: {
      objects: 'Objetos del Chamán',
      item: 'ítem',
      items: 'ítems',
      found: 'encontrados',
      loading: 'Cargando…',
      fetching: 'Buscando mensajes…',
      fetchingSub: 'Esto puede tardar unos segundos.',
      itemsFound: '{n} ítems encontrados…',
      noneTitle: 'Ningún ítem cargado',
      noneDesc: 'Usa el botón de actualizar para buscar los mensajes de nuevo.',
      nothingTitle: 'No se encontró nada',
      tryOther: 'Prueba con otro término de búsqueda.',
      emptyCat: 'No hay ítems en esta categoría.',
      colImage: 'Imagen',
      colCatId: 'Categoría / ID',
      colId: 'ID',
      colName: 'Nombre',
      colVotes: 'Votos',
      colMessage: 'Mensaje',
      message: 'mensaje',
      chosen: 'Elegido',
      vote: 'Votar',
      unvote: 'Quitar voto',
      searchPlaceholder: 'Buscar por nombre o ID',
      searchLabel: 'Buscar ítems',
      clearSearch: 'Borrar búsqueda',
      refresh: 'Actualizar',
      close: 'Cerrar',
      language: 'Idioma',
      copyList: 'Copiar lista',
      copyTitle: 'Copiar lista',
      copySubtitle: '{cat} · {n} en el orden actual',
      quantity: 'Cantidad',
      first10: 'Primeros 10',
      specific: 'Específico',
      allItems: 'Todos',
      format: 'Formato',
      onePerLine: 'Uno por línea',
      sameLine: 'Misma línea',
      separator: 'Separador',
      preview: 'Vista previa',
      selected: '{n} seleccionados',
      copy: 'Copiar',
      copied: '¡Copiado!',
      downloadJson: 'Descargar JSON',
      content: 'Contenido',
      fName: 'Nombre del ítem',
      fId: 'ID',
      fCatId: 'Categoría + ID',
      fVotes: 'Votos',
      settings: 'Ajustes',
      theme: 'Tema',
      themeDark: 'Oscuro',
      themeLight: 'Claro',
      themeAuto: 'Auto',
      themeAutoHint: 'Auto sigue el tema de Discord.',
      performance: 'Rendimiento',
      optimization: 'Modo optimización',
      optimizationDesc: 'Reemplaza el desenfoque, los brillos y las animaciones por un oscurecimiento simple para una interfaz más ligera.',
      zoomImage: 'Ampliar imagen',
    },
  };

  const cat = (name, group, file, en, pt, es) => ({
    name,
    group,
    img: chrome.runtime.getURL(`image/${file}.png`),
    labels: { en, 'pt-br': pt, es },
  });

  const CATEGORIES = [
    cat('All', 'main', 'All', 'All', 'Todos', 'Todos'),
    cat('Fur', 'main', 'Fur', 'Fur', 'Pelos', 'Piel'),
    cat('Head', 'main', 'Head', 'Head', 'Cabeça', 'Cabeza'),
    cat('Ears', 'main', 'Ears', 'Ears', 'Orelhas', 'Orejas'),
    cat('Eyes', 'main', 'Eyes', 'Eyes', 'Olhos', 'Ojos'),
    cat('Mouth', 'main', 'Mouth', 'Mouth', 'Boca', 'Boca'),
    cat('Neck', 'main', 'Neck', 'Neck', 'Pescoço', 'Cuello'),
    cat('Tail', 'main', 'Tail', 'Tail', 'Rabo', 'Cola'),
    cat('Hair Style', 'main', 'Hair_Style', 'Hair Style', 'Penteados', 'Peinados'),
    cat('Contact Lenses', 'main', 'Contact_Lenses', 'Contact Lenses', 'Lentes de Contato', 'Lentillas'),
    cat('Tattoo', 'main', 'Tattoo', 'Tattoo', 'Tatuagens', 'Tatuajes'),
    cat('Hands', 'main', 'Hands', 'Hands', 'Mãos', 'Manos'),

    cat('Small Box', 'objects', 'Small_Box', 'Small Box', 'Caixa Pequena', 'Caja Pequeña'),
    cat('Large Box', 'objects', 'Large_Box', 'Large Box', 'Caixa Grande', 'Caja Grande'),
    cat('Short Plank', 'objects', 'Short_Plank', 'Short Plank', 'Tábua Pequena', 'Tabla Pequeña'),
    cat('Long Plank', 'objects', 'Long_Plank', 'Long Plank', 'Tábua Grande', 'Tabla Grande'),
    cat('Cannonball', 'objects', 'Cannonball', 'Cannonball', 'Bola de Canhão', 'Cañonazo'),
    cat('Balloon', 'objects', 'Balloon', 'Balloon', 'Balão', 'Globo'),
    cat('Anvil', 'objects', 'Anvil', 'Anvil', 'Bigorna', 'Yunque'),
    cat('Ball', 'objects', 'Ball', 'Ball', 'Bola', 'Pelota'),
    cat('Trampoline', 'objects', 'Trampoline', 'Trampoline', 'Trampolim', 'Trampolín'),
  ];

  const isValidLang = (code) => LANGS.some((l) => l.code === code);

  function detectLang() {
    const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    const first = String(list[0] || 'en').toLowerCase();
    if (first.startsWith('pt')) return 'pt-br';
    if (first.startsWith('es')) return 'es';
    return 'en';
  }

  function storageGet(key) {
    return new Promise((resolve) => {
      try {
        chrome.storage.local.get(key, (result) => {
          if (chrome.runtime.lastError) return resolve(null);
          resolve(result ? result[key] : null);
        });
      } catch (err) {
        resolve(null);
      }
    });
  }

  function storageSet(key, value) {
    return new Promise((resolve) => {
      try {
        chrome.storage.local.set({ [key]: value }, () => resolve());
      } catch (err) {
        resolve();
      }
    });
  }

   
   function getHeaders() {
	  return new Promise((resolve) => {
		chrome.storage.local.get(["requestHeaders"], (result) => {
		  resolve(result.requestHeaders || {});
		});
	  });
	}

	async function sendFetch(url, method, referrer="https://discord.com/channels/246815328103825409/947606292376207490") {
		const headers = await getHeaders();

		return await fetch(url, {
			headers,
			referrer,
			body: null,
			method,
			mode: "cors",
			credentials: "include"
		});
	}

   async function requestMessages(before = null) {
		let res;
		if (before != null) {
			res = await sendFetch(`https://discord.com/api/v9/channels/947606292376207490/messages?before=${before}&limit=100`, "GET");
		} else {
			res = await sendFetch("https://discord.com/api/v9/channels/947606292376207490/messages?limit=100", "GET");
		}
		return await res.json();
    }

  function parseMessage(msg) {
    const embed = msg && Array.isArray(msg.embeds) ? msg.embeds[0] : null;
    if (!embed) return null;

    const fields = Array.isArray(embed.fields) ? embed.fields : [];
    const norm = (x) => String(x.name || '').trim().toLowerCase();
    const getField = (name) => {
      const f = fields.find((x) => norm(x) === name);
      return f ? String(f.value ?? '').trim() : '';
    };
    const hasField = (name) => fields.some((x) => norm(x) === name);

    const category = getField('category');
    const rawId = getField('item id');
    if (!rawId) return null;

    const [catPart, itemPart] = rawId.split(',').map((s) => s.trim());
    const categoryID = parseInt(catPart, 10);
    const itemID = parseInt(itemPart, 10);

    const reactions = Array.isArray(msg.reactions) ? msg.reactions : [];
    const reaction = reactions.find((r) => r.emoji && r.emoji.name === 'sale_star') || reactions[0];

    return {
      title: embed.title || '',
      category,
      categoryID: Number.isNaN(categoryID) ? 0 : categoryID,
      itemID: Number.isNaN(itemID) ? 0 : itemID,
      img: embed.thumbnail ? embed.thumbnail.proxy_url : '',
      count: reaction ? Number(reaction.count) || 0 : 0,
      voted: reaction ? reaction.me === true : false,
      messageID: msg.id,
      isChosen: hasField('votes'),
    };
  }

  async function fetchAllItems(onProgress) {
    const items = [];
    const chosen = [];
    const seenMessages = new Set();
    const usedCursors = new Set();
    let before = null;

    while (true) {
      const messages = await requestMessages(before);
      if (!Array.isArray(messages) || messages.length === 0) break;

      let reachedStop = false;

      for (const msg of messages) {
        if (typeof msg.content === 'string' && msg.content.includes(STOP_TEXT)) {
          reachedStop = true;
          break;
        }
        const item = parseMessage(msg);
        if (item && !seenMessages.has(item.messageID)) {
          seenMessages.add(item.messageID);
          if (item.isChosen) chosen.push(item);
          else items.push(item);
        }
      }

      if (onProgress) onProgress(items.length);
      if (reachedStop) break;

      const lastId = messages[messages.length - 1].id;
      if (!lastId || usedCursors.has(lastId)) break;
      usedCursors.add(lastId);
      before = lastId;
    }

    return { items, chosen };
  }

  const CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }

    .overlay {
      position: fixed; inset: 0; z-index: 2147483000;
      display: flex; align-items: center; justify-content: center;
      background: rgba(4, 5, 8, .72);
      backdrop-filter: blur(6px);
      font-family: "gg sans", "Inter", "Segoe UI", system-ui, sans-serif;
      color: #e8e9ef;
      animation: fade .16s ease-out;
    }
    .overlay:focus { outline: none; }
    @keyframes fade { from { opacity: 0 } to { opacity: 1 } }
    @keyframes rise { from { transform: translateY(10px) scale(.985); opacity: 0 } to { transform: none; opacity: 1 } }
    @keyframes pulse { from { box-shadow: 0 0 0 0 rgba(255,160,5,.55) } to { box-shadow: 0 0 0 11px rgba(255,160,5,0) } }

    .panel {
      --ink: #0d0e12;
      --panel: #14151b;
      --raised: #1a1c24;
      --line: #262833;
      --muted: #8b8fa3;
      --amber: #ffa005;
      --blurple: #5865f2;
      position: relative;
      width: min(1180px, 94vw); height: min(780px, 90vh);
      display: grid; grid-template-columns: 236px 1fr;
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 16px;
      box-shadow: 0 30px 90px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.02) inset;
      overflow: hidden;
      animation: rise .2s cubic-bezier(.2,.8,.2,1);
    }

    .side {
      display: flex; flex-direction: column; min-height: 0;
      background: linear-gradient(180deg, #111218, #0d0e12);
      border-right: 1px solid var(--line);
    }
    .brand { display: flex; align-items: center; gap: 10px; padding: 18px 16px 14px; }
    .brand img { width: 26px; height: 26px; object-fit: contain; }
    .brand b { font-size: 16px; letter-spacing: .2px; }
    .brand span { display: block; font-size: 11.5px; color: var(--muted); margin-top: 1px; }

    .cats { flex: 1; overflow-y: auto; padding: 4px 10px 14px; scrollbar-width: thin; scrollbar-color: #2b2e3b transparent; }
    .group-label { font-size: 12px; color: var(--muted); padding: 14px 8px 6px; }
    .cat {
      display: flex; align-items: center; gap: 10px; width: 100%;
      padding: 6px 8px; margin: 1px 0; border: 0; border-radius: 10px;
      background: transparent; color: #c5c8d6; cursor: pointer; text-align: left;
      font: inherit; font-size: 13.5px;
      transition: background .12s, color .12s;
    }
    .cat:hover { background: rgba(255,255,255,.045); color: #fff; }
    .cat.active {
      background: linear-gradient(90deg, rgba(88,101,242,.28), rgba(88,101,242,.08));
      color: #fff; box-shadow: inset 2px 0 0 var(--blurple);
    }
    .cat .ico {
      width: 34px; height: 34px; flex: none; border-radius: 9px;
      background: var(--raised); border: 1px solid var(--line);
      display: grid; place-items: center;
    }
    .cat .ico img { max-width: 26px; max-height: 26px; image-rendering: auto; }
    .cat .name { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .cat .n {
      font-size: 11.5px; color: var(--muted); background: rgba(255,255,255,.05);
      padding: 2px 7px; border-radius: 99px; font-variant-numeric: tabular-nums;
    }
    .cat.active .n { color: #fff; background: rgba(255,255,255,.14); }

    .main { display: flex; flex-direction: column; min-width: 0; min-height: 0; }
    .head {
      display: flex; align-items: center; gap: 10px; padding: 18px 22px 14px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(88,101,242,.07), transparent);
    }
    .head .title { flex: 1; min-width: 0; margin-right: 4px; }
    .head h2 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: .1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .head p { margin: 3px 0 0; font-size: 12.5px; color: var(--muted); }

    .search { position: relative; width: 260px; }
    .search > svg { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); width: 15px; height: 15px; color: var(--muted); pointer-events: none; }
    .search input {
      width: 100%; height: 36px; padding: 0 34px 0 34px;
      background: var(--ink); color: #fff; font: inherit; font-size: 13.5px;
      border: 1px solid var(--line); border-radius: 10px; outline: none;
      transition: border-color .12s, box-shadow .12s;
    }
    .search input::placeholder { color: #666a7d; }
    .search input:focus { border-color: var(--blurple); box-shadow: 0 0 0 3px rgba(88,101,242,.22); }

    .search .search-clear {
      position: absolute; right: 6px; top: 50%; transform: translateY(-50%);
      width: 24px; height: 24px; padding: 0; border: 0; border-radius: 6px;
      background: transparent; color: var(--muted); cursor: pointer;
      display: none; place-items: center;
      transition: background .12s, color .12s;
    }
    .search.has-value .search-clear { display: grid; }
    .search .search-clear:hover { background: rgba(255,255,255,.08); color: #fff; }
    .search .search-clear:focus-visible { outline: 2px solid var(--blurple); outline-offset: 1px; }
    .search .search-clear svg { position: static; transform: none; width: 13px; height: 13px; color: inherit; }

    .icon-btn {
      width: 36px; height: 36px; flex: none; border-radius: 10px; border: 1px solid var(--line);
      background: var(--raised); color: #c5c8d6; cursor: pointer; display: grid; place-items: center;
      transition: background .12s, color .12s, border-color .12s, transform .08s;
    }
    .icon-btn:hover { background: #22242e; color: #fff; border-color: #343746; }
    .icon-btn:active { transform: scale(.93); }
    .icon-btn:disabled { opacity: .4; cursor: not-allowed; pointer-events: none; }
    .icon-btn:focus-visible, .cat:focus-visible, th.sortable:focus-visible, a.link:focus-visible, .lang-btn:focus-visible, .lang-opt:focus-visible, .btn:focus-visible, .seg button:focus-visible { outline: 2px solid var(--blurple); outline-offset: 2px; }
    .icon-btn svg { width: 16px; height: 16px; }

    .copy-btn svg { transition: transform .18s cubic-bezier(.2,.8,.2,1); }
    .copy-btn:hover { color: var(--amber); border-color: rgba(255,160,5,.5); background: rgba(255,160,5,.09); }
    .copy-btn:hover svg { transform: translateY(1.5px) scale(1.08); }
    .copy-btn:active svg { transform: translateY(3px) scale(.92); }
    .copy-btn.pulse { animation: pulse .45s ease-out; }

    .lang { position: relative; flex: none; }
    .lang-btn {
      height: 36px; padding: 0 10px; display: flex; align-items: center; gap: 8px;
      border-radius: 10px; border: 1px solid var(--line); background: var(--raised);
      color: #c5c8d6; cursor: pointer; font: inherit; font-size: 12.5px; font-weight: 600;
      transition: background .12s, color .12s, border-color .12s;
    }
    .lang-btn:hover, .lang.open .lang-btn { background: #22242e; color: #fff; border-color: #343746; }
    .lang-btn svg { width: 12px; height: 12px; transition: transform .15s; }
    .lang.open .lang-btn svg { transform: rotate(180deg); }
    .flag { width: 22px; height: 16px; object-fit: cover; border-radius: 3px; display: block; box-shadow: 0 0 0 1px rgba(255,255,255,.1); }
    .lang-menu {
      display: none; position: absolute; right: 0; top: 42px; z-index: 20; min-width: 200px; padding: 6px;
      background: var(--raised); border: 1px solid var(--line); border-radius: 12px;
      box-shadow: 0 16px 40px rgba(0,0,0,.55);
      animation: rise .14s ease-out;
    }
    .lang.open .lang-menu { display: block; }
    .lang-opt {
      display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 10px; border: 0; border-radius: 8px;
      background: transparent; color: #c5c8d6; cursor: pointer; font: inherit; font-size: 13.5px; text-align: left;
      transition: background .12s, color .12s;
    }
    .lang-opt:hover { background: rgba(255,255,255,.06); color: #fff; }
    .lang-opt.active { background: rgba(88,101,242,.18); color: #fff; }
    .lang-opt span { flex: 1; }
    .lang-opt svg { width: 14px; height: 14px; color: var(--blurple); }

    .tablewrap { flex: 1; min-height: 0; overflow: auto; scrollbar-width: thin; scrollbar-color: #2b2e3b transparent; }
    table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: 14px; }
    thead th {
      position: sticky; top: 0; z-index: 2; text-align: left; padding: 11px 16px;
      background: #171820; color: var(--muted); font-weight: 600; font-size: 12.5px;
      border-bottom: 1px solid var(--line); white-space: nowrap; user-select: none;
    }
    th.sortable { cursor: pointer; transition: color .12s; }
    th.sortable:hover { color: #fff; }
    th.sorted { color: #fff; }
    th .arrow { display: inline-block; width: 12px; margin-left: 5px; color: var(--amber); }
    th.num, td.num { text-align: right; }

    tbody td { padding: 8px 16px; border-bottom: 1px solid rgba(255,255,255,.04); vertical-align: middle; }
    tbody tr { transition: background .1s; }
    tbody tr:hover { background: rgba(88,101,242,.09); }
    td.thumb { width: 84px; }
    .thumb-box {
      width: 56px; height: 56px; border-radius: 12px; display: grid; place-items: center;
      background: radial-gradient(circle at 50% 35%, #262937, #171922);
      border: 1px solid var(--line);
    }
    .thumb-box img { max-width: 46px; max-height: 46px; }
    td.id { font-variant-numeric: tabular-nums; color: #c5c8d6; }
    td.id small { color: var(--muted); margin-right: 6px; }
    td.name { font-weight: 600; color: #fff; }
    td.name small { display: block; font-weight: 400; color: var(--muted); font-size: 12px; margin-top: 2px; }

    tbody tr.chosen { background: linear-gradient(90deg, rgba(255,160,5,.10), rgba(255,160,5,.025) 55%, transparent); }
    tbody tr.chosen:hover { background: linear-gradient(90deg, rgba(255,160,5,.15), rgba(255,160,5,.05) 55%, rgba(88,101,242,.05)); }
    tbody tr.chosen td:first-child { box-shadow: inset 3px 0 0 var(--amber); }
    tbody tr.chosen .thumb-box { border-color: rgba(255,160,5,.45); box-shadow: 0 0 14px rgba(255,160,5,.14); }
    .badge {
      display: inline-flex; align-items: center; margin-left: 8px; padding: 1px 8px;
      font-size: 11px; font-weight: 600; border-radius: 99px; vertical-align: middle;
      color: var(--amber); background: rgba(255,160,5,.12); border: 1px solid rgba(255,160,5,.28);
    }

    .count {
      display: inline-flex; align-items: center; gap: 6px; padding: 4px 11px; border-radius: 99px;
      background: rgba(255,160,5,.12); color: var(--amber); font-weight: 700; font-variant-numeric: tabular-nums;
      border: 1px solid rgba(255,160,5,.28);
    }
    .count.voted {
      background: rgba(255, 85, 120, .14);
      color: #ff9aae;
      border-color: rgba(255, 85, 120, .38);
      box-shadow:
        0 0 10px rgba(255, 70, 110, .10),
        inset 0 0 8px rgba(255, 140, 160, .05);
    }
    button.count { font: inherit; font-weight: 700; line-height: 1.2; cursor: pointer; transition: background .12s, border-color .12s, color .12s, transform .08s, filter .12s; }
    button.count:hover { filter: brightness(1.2); }
    button.count:active { transform: scale(.94); }
    button.count:focus-visible { outline: 2px solid var(--blurple); outline-offset: 2px; }
    .count svg { width: 13px; height: 13px; }
    a.link {
      display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 8px;
      color: #aeb5ff; text-decoration: none; font-size: 13px; border: 1px solid #2e3350; background: rgba(88,101,242,.1);
      transition: background .12s, color .12s;
    }
    a.link:hover { background: var(--blurple); color: #fff; }
    a.link svg { width: 12px; height: 12px; }

    .state { padding: 70px 20px; text-align: center; color: var(--muted); }
    .state b { display: block; color: #fff; font-size: 16px; margin-bottom: 6px; }
    .spinner {
      width: 30px; height: 30px; margin: 0 auto 16px; border-radius: 50%;
      border: 3px solid #2a2d3a; border-top-color: var(--blurple); animation: spin .8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg) } }

    .dlg-overlay {
      position: absolute; inset: 0; z-index: 30; display: flex; align-items: center; justify-content: center;
      background: rgba(4, 5, 8, .62); backdrop-filter: blur(4px); animation: fade .14s ease-out;
    }
    .dlg-overlay:focus { outline: none; }
    .dlg {
      width: min(540px, 92%); max-height: 94%; display: flex; flex-direction: column;
      background: var(--panel); border: 1px solid var(--line); border-radius: 16px;
      box-shadow: 0 24px 70px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.02) inset;
      overflow: hidden; animation: rise .18s cubic-bezier(.2,.8,.2,1);
    }
    .dlg-head {
      display: flex; align-items: center; gap: 12px; padding: 16px 18px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,160,5,.07), transparent);
    }
    .dlg-ico {
      width: 40px; height: 40px; flex: none; border-radius: 12px; display: grid; place-items: center;
      color: var(--amber); background: rgba(255,160,5,.12); border: 1px solid rgba(255,160,5,.28);
    }
    .dlg-ico svg { width: 20px; height: 20px; }
    .dlg-title { flex: 1; min-width: 0; }
    .dlg-title h3 { margin: 0; font-size: 17px; font-weight: 700; }
    .dlg-title p { margin: 3px 0 0; font-size: 12.5px; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .dlg-body { padding: 18px; display: grid; gap: 18px; overflow-y: auto; scrollbar-width: thin; scrollbar-color: #2b2e3b transparent; }
    .field-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
    .field-label { font-size: 12px; font-weight: 600; color: var(--muted); letter-spacing: .2px; }
    .field-top .field-label { margin: 0; }
    .field > .field-label { display: block; margin-bottom: 8px; }
    .dlg-count { font-size: 12px; color: var(--amber); font-variant-numeric: tabular-nums; font-weight: 600; }
    .seg { display: flex; gap: 4px; padding: 3px; background: var(--ink); border: 1px solid var(--line); border-radius: 11px; }
    .seg button {
      flex: 1; height: 32px; padding: 0 10px; border: 0; border-radius: 8px; background: transparent;
      color: #aeb1c2; font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
      transition: background .12s, color .12s, box-shadow .12s;
    }
    .seg button:hover { color: #fff; background: rgba(255,255,255,.05); }
    .seg button.active { color: #fff; background: rgba(88,101,242,.26); box-shadow: inset 0 0 0 1px rgba(88,101,242,.55); }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip {
      display: inline-flex; align-items: center; gap: 7px; height: 34px; padding: 0 13px 0 10px;
      border-radius: 99px; border: 1px solid var(--line); background: var(--ink); color: #aeb1c2;
      font: inherit; font-size: 13px; font-weight: 600; cursor: pointer;
      transition: background .12s, color .12s, border-color .12s, transform .08s;
    }
    .chip .box {
      width: 16px; height: 16px; border-radius: 5px; display: grid; place-items: center; flex: none;
      border: 1px solid #3a3d4e; color: transparent; transition: background .12s, border-color .12s, color .12s;
    }
    .chip .box svg { width: 11px; height: 11px; }
    .chip:hover { color: #fff; border-color: #343746; }
    .chip:active { transform: scale(.96); }
    .chip.active { color: #fff; background: rgba(88,101,242,.22); border-color: rgba(88,101,242,.6); }
    .chip.active .box { background: var(--blurple); border-color: var(--blurple); color: #fff; }
    .chip:focus-visible { outline: 2px solid var(--blurple); outline-offset: 2px; }
    .row { display: flex; align-items: center; gap: 10px; margin-top: 10px; }
    .row .hint { font-size: 12.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
    .row .field-label { flex: none; }
    .input {
      height: 36px; padding: 0 12px; background: var(--ink); color: #fff; font: inherit; font-size: 13.5px;
      border: 1px solid var(--line); border-radius: 10px; outline: none;
      transition: border-color .12s, box-shadow .12s;
    }
    .input:focus { border-color: var(--blurple); box-shadow: 0 0 0 3px rgba(88,101,242,.22); }
    .num-input { width: 110px; }
    .sep-input { width: 110px; font-family: ui-monospace, Consolas, monospace; }
    textarea.preview {
      display: block; width: 100%; height: 132px; padding: 10px 12px; resize: none; outline: none;
      background: var(--ink); color: #d5d8e6; border: 1px solid var(--line); border-radius: 10px;
      font-family: ui-monospace, "Cascadia Mono", Consolas, monospace; font-size: 12.5px; line-height: 1.55;
      scrollbar-width: thin; scrollbar-color: #2b2e3b transparent;
    }
    textarea.preview:focus { border-color: #343746; }
    .dlg-foot { display: flex; justify-content: flex-end; gap: 10px; padding: 14px 18px; border-top: 1px solid var(--line); background: rgba(0,0,0,.12); }
    .btn {
      height: 38px; padding: 0 16px; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      border-radius: 10px; border: 1px solid var(--line); font: inherit; font-size: 13.5px; font-weight: 600; cursor: pointer;
      transition: background .12s, filter .12s, transform .08s, border-color .12s, color .12s;
    }
    .btn svg { width: 16px; height: 16px; }
    .btn:active { transform: scale(.96); }
    .btn:disabled { opacity: .45; cursor: not-allowed; pointer-events: none; }
    .btn.ghost { background: var(--raised); color: #c5c8d6; }
    .btn.ghost:hover { background: #22242e; color: #fff; border-color: #343746; }
    .btn.primary { background: var(--blurple); border-color: transparent; color: #fff; min-width: 128px; }
    .btn.primary:hover { filter: brightness(1.12); }
    .btn.primary.done { background: #2f9e63; }

    @media (max-width: 820px) {
      .panel { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
      .side { border-right: 0; border-bottom: 1px solid var(--line); max-height: 190px; }
      .search { width: 140px; }
      .head { flex-wrap: wrap; }
    }
    @media (prefers-reduced-motion: reduce) {
      .overlay, .panel, .spinner, .dlg, .dlg-overlay, .lang-menu, .copy-btn.pulse { animation: none; }
    }

    .thumb-box { position: relative; padding: 0; font: inherit; color: inherit; cursor: pointer; appearance: none; transition: border-color .12s, transform .12s; }
    .thumb-box:hover { border-color: var(--blurple); transform: scale(1.05); }
    .thumb-box:focus-visible { outline: 2px solid var(--blurple); outline-offset: 2px; }

    .lb-overlay {
      position: absolute; inset: 0; z-index: 40; display: flex; align-items: center; justify-content: center;
      padding: 24px; background: rgba(4, 5, 8, .78); backdrop-filter: blur(6px); animation: fade .14s ease-out;
    }
    .lb-overlay:focus { outline: none; }
    .lb-card {
      display: flex; flex-direction: column; width: fit-content; min-width: 300px; max-width: min(520px, 100%); max-height: 100%;
      background: var(--panel); border: 1px solid var(--line); border-radius: 18px; overflow: hidden;
      box-shadow: 0 24px 70px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.02) inset;
      animation: rise .18s cubic-bezier(.2,.8,.2,1);
    }
    .lb-stage {
      display: grid; place-items: center; min-width: 300px; min-height: 220px; padding: 32px; overflow: auto;
      background: radial-gradient(circle at 50% 35%, #262937, #171922);
    }
    .lb-stage img {
      display: block; width: auto; height: auto; object-fit: contain; user-select: none;
      max-width: min(400px, 70vw); max-height: min(400px, 48vh);
    }
    .lb-info {
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      padding: 14px 20px 16px; border-top: 1px solid var(--line);
    }
    .lb-name { margin: 0; font-size: 17px; font-weight: 700; text-align: center; overflow-wrap: anywhere; }
    .lb-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; }
    .lb-tag {
      display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 99px;
      font-size: 12px; font-weight: 600; font-variant-numeric: tabular-nums;
      color: #c5c8d6; background: var(--ink); border: 1px solid var(--line);
    }
    .lb-tag svg { width: 12px; height: 12px; }
    .lb-tag.votes { color: var(--amber); background: rgba(255,160,5,.12); border-color: rgba(255,160,5,.28); }

    .dlg.sm { width: min(440px, 92%); }
    .set-row {
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      padding: 12px 14px; border: 1px solid var(--line); border-radius: 12px; background: var(--ink);
    }
    .set-text b { display: block; font-size: 14px; font-weight: 600; }
    .set-text span { display: block; margin-top: 3px; font-size: 12.5px; color: var(--muted); line-height: 1.45; }
    .hint-text { margin: 8px 2px 0; font-size: 12.5px; color: var(--muted); }
    .switch {
      position: relative; width: 44px; height: 26px; flex: none; padding: 0; cursor: pointer;
      border-radius: 99px; border: 1px solid var(--line); background: var(--raised);
      transition: background .15s, border-color .15s;
    }
    .switch .knob {
      position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 50%;
      background: #8b8fa3; transition: transform .15s cubic-bezier(.2,.8,.2,1), background .15s;
    }
    .switch.on { background: var(--blurple); border-color: transparent; }
    .switch.on .knob { transform: translateX(18px); background: #fff; }
    .switch:focus-visible { outline: 2px solid var(--blurple); outline-offset: 2px; }
    .settings-btn svg { transition: transform .25s cubic-bezier(.2,.8,.2,1); }
    .settings-btn:hover svg { transform: rotate(60deg); }

    .overlay[data-theme="light"] {
      color: #1c1e29; color-scheme: light; background: rgba(34, 38, 64, .42);
    }
    .overlay[data-theme="light"] .panel {
      --ink: #f1f2f8; --panel: #ffffff; --raised: #f5f6fa; --line: #e0e3ed; --muted: #6b7086; --amber: #d97706;
      box-shadow: 0 30px 80px rgba(24, 28, 64, .30), 0 0 0 1px rgba(255,255,255,.6) inset;
    }
    .overlay[data-theme="light"] .side { background: linear-gradient(180deg, #f8f9fd, #eef0f7); }
    .overlay[data-theme="light"] .cats,
    .overlay[data-theme="light"] .tablewrap,
    .overlay[data-theme="light"] .dlg-body,
    .overlay[data-theme="light"] textarea.preview { scrollbar-color: #c9cce0 transparent; }
    .overlay[data-theme="light"] .cat { color: #3b3f55; }
    .overlay[data-theme="light"] .cat:hover { background: rgba(24,28,64,.05); color: #11131c; }
    .overlay[data-theme="light"] .cat.active { background: linear-gradient(90deg, rgba(88,101,242,.18), rgba(88,101,242,.04)); color: #11131c; }
    .overlay[data-theme="light"] .cat .n { background: rgba(24,28,64,.06); }
    .overlay[data-theme="light"] .cat.active .n { color: #3440b8; background: rgba(88,101,242,.16); }
    .overlay[data-theme="light"] .head { background: linear-gradient(180deg, rgba(88,101,242,.07), transparent); }
    .overlay[data-theme="light"] .search input { color: #1c1e29; }
    .overlay[data-theme="light"] .search input::placeholder { color: #9a9eb3; }
    .overlay[data-theme="light"] .search .search-clear:hover { background: rgba(24,28,64,.07); color: #11131c; }
    .overlay[data-theme="light"] .icon-btn,
    .overlay[data-theme="light"] .lang-btn { color: #4a4e65; }
    .overlay[data-theme="light"] .icon-btn:hover,
    .overlay[data-theme="light"] .lang-btn:hover,
    .overlay[data-theme="light"] .lang.open .lang-btn { background: #eaecf4; color: #11131c; border-color: #cfd2e0; }
    .overlay[data-theme="light"] .copy-btn:hover { color: var(--amber); background: rgba(217,119,6,.09); border-color: rgba(217,119,6,.45); }
    .overlay[data-theme="light"] .lang-menu { box-shadow: 0 16px 40px rgba(24,28,64,.2); }
    .overlay[data-theme="light"] .lang-opt { color: #3b3f55; }
    .overlay[data-theme="light"] .lang-opt:hover { background: rgba(24,28,64,.05); color: #11131c; }
    .overlay[data-theme="light"] .lang-opt.active { background: rgba(88,101,242,.12); color: #11131c; }
    .overlay[data-theme="light"] thead th { background: #f4f5fa; }
    .overlay[data-theme="light"] th.sortable:hover,
    .overlay[data-theme="light"] th.sorted { color: #11131c; }
    .overlay[data-theme="light"] tbody td { border-bottom-color: rgba(24,28,64,.07); }
    .overlay[data-theme="light"] tbody tr:hover { background: rgba(88,101,242,.07); }
    .overlay[data-theme="light"] .thumb-box { background: radial-gradient(circle at 50% 35%, #ffffff, #eceef6); }
    .overlay[data-theme="light"] td.id { color: #3b3f55; }
    .overlay[data-theme="light"] td.name { color: #14161f; }
    .overlay[data-theme="light"] tbody tr.chosen { background: linear-gradient(90deg, rgba(255,160,5,.14), rgba(255,160,5,.035) 55%, transparent); }
    .overlay[data-theme="light"] tbody tr.chosen:hover { background: linear-gradient(90deg, rgba(255,160,5,.2), rgba(255,160,5,.06) 55%, rgba(88,101,242,.05)); }
    .overlay[data-theme="light"] .badge { color: #b45309; background: rgba(255,160,5,.16); border-color: rgba(217,119,6,.35); }
    .overlay[data-theme="light"] .count { color: #b45309; background: rgba(255,160,5,.14); border-color: rgba(217,119,6,.35); }
    .overlay[data-theme="light"] .count.voted { color: #d6335a; background: rgba(255,85,120,.12); border-color: rgba(255,85,120,.4); box-shadow: none; }
    .overlay[data-theme="light"] a.link { color: #4752c4; background: rgba(88,101,242,.08); border-color: #d0d5f7; }
    .overlay[data-theme="light"] a.link:hover { background: var(--blurple); color: #fff; }
    .overlay[data-theme="light"] .state b { color: #14161f; }
    .overlay[data-theme="light"] .spinner { border-color: #dcdfeb; border-top-color: var(--blurple); }
    .overlay[data-theme="light"] .dlg-overlay { background: rgba(34,38,64,.38); }
    .overlay[data-theme="light"] .dlg { box-shadow: 0 24px 70px rgba(24,28,64,.28); }
    .overlay[data-theme="light"] .dlg-ico { color: #b45309; }
    .overlay[data-theme="light"] .seg button { color: #5a5e75; }
    .overlay[data-theme="light"] .seg button:hover { color: #11131c; background: rgba(24,28,64,.05); }
    .overlay[data-theme="light"] .seg button.active { color: #2f3aa8; background: rgba(88,101,242,.14); box-shadow: inset 0 0 0 1px rgba(88,101,242,.5); }
    .overlay[data-theme="light"] .chip { color: #5a5e75; }
    .overlay[data-theme="light"] .chip .box { border-color: #c3c6d6; }
    .overlay[data-theme="light"] .chip:hover { color: #11131c; border-color: #cfd2e0; }
    .overlay[data-theme="light"] .chip.active { color: #2f3aa8; background: rgba(88,101,242,.12); border-color: rgba(88,101,242,.5); }
    .overlay[data-theme="light"] .chip.active .box { color: #fff; }
    .overlay[data-theme="light"] .input { color: #1c1e29; }
    .overlay[data-theme="light"] textarea.preview { color: #2a2d3f; }
    .overlay[data-theme="light"] textarea.preview:focus { border-color: #cfd2e0; }
    .overlay[data-theme="light"] .dlg-foot { background: rgba(24,28,64,.03); }
    .overlay[data-theme="light"] .btn.ghost { color: #3b3f55; }
    .overlay[data-theme="light"] .btn.ghost:hover { background: #eaecf4; color: #11131c; border-color: #cfd2e0; }
    .overlay[data-theme="light"] .lb-overlay { background: rgba(24, 28, 52, .5); }
    .overlay[data-theme="light"] .lb-card { box-shadow: 0 24px 70px rgba(20,24,60,.32); }
    .overlay[data-theme="light"] .lb-stage { background: radial-gradient(circle at 50% 35%, #ffffff, #eceef6); }
    .overlay[data-theme="light"] .lb-tag { color: #3b3f55; background: #f1f2f8; }
    .overlay[data-theme="light"] .lb-tag.votes { color: #b45309; background: rgba(255,160,5,.14); border-color: rgba(217,119,6,.35); }

    .overlay[data-opt="on"] { backdrop-filter: none; background: rgba(4, 5, 8, .88); animation: none; }
    .overlay[data-opt="on"][data-theme="light"] { background: rgba(24, 26, 40, .68); }
    .overlay[data-opt="on"] .panel,
    .overlay[data-opt="on"] .dlg,
    .overlay[data-opt="on"] .lang-menu,
    .overlay[data-opt="on"] .lb-card { animation: none; box-shadow: none; }
    .overlay[data-opt="on"] .panel { box-shadow: 0 0 0 1px var(--line); }
    .overlay[data-opt="on"] .dlg-overlay,
    .overlay[data-opt="on"] .lb-overlay { backdrop-filter: none; background: rgba(4, 5, 8, .82); animation: none; }
    .overlay[data-opt="on"][data-theme="light"] .dlg-overlay,
    .overlay[data-opt="on"][data-theme="light"] .lb-overlay { background: rgba(24, 26, 40, .7); }
    .overlay[data-opt="on"] .thumb-box,
    .overlay[data-opt="on"] tbody tr.chosen .thumb-box,
    .overlay[data-opt="on"] .count,
    .overlay[data-opt="on"] .count.voted { box-shadow: none; }
    .overlay[data-opt="on"] .copy-btn.pulse { animation: none; }
    .overlay[data-opt="on"] * { transition: none !important; }
  `;

  const SVG = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    fileDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-down preview-icon"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>',
  };

  const state = {
    items: [],
    chosen: [],
    loaded: false,
    loading: false,
    category: 'All',
    search: '',
    sort: { key: 'count', dir: 'desc' },
    lang: detectLang(),
    theme: 'auto',
    optimize: false,
  };

  let modalHost = null;
  let modalRoot = null;
  let ui = {};
  let dialogEl = null;
  let dlg = null;
  let settingsEl = null;
  let lightEl = null;
  let themeObserver = null;

  const t = (key, vars) => {
    const dict = I18N[state.lang] || I18N.en;
    let s = dict[key] ?? I18N.en[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
    return s;
  };

  const getLang = () => LANGS.find((l) => l.code === state.lang) || LANGS[0];
  const catLabel = (name) => {
    const c = CATEGORIES.find((x) => x.name === name);
    return c ? c.labels[state.lang] || c.labels.en : name;
  };

  const fmt = (n) => Number(n).toLocaleString(LOCALES[state.lang] || 'en-US');
  const sameCat = (a, b) => String(a).toLowerCase() === String(b).toLowerCase();

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) if (c) node.append(c);
    return node;
  }

  async function initLanguage() {
    const saved = await storageGet(LANG_KEY);
    if (isValidLang(saved)) {
      state.lang = saved;
    } else {
      state.lang = detectLang();
      await storageSet(LANG_KEY, state.lang);
    }
    if (modalRoot) refreshLanguage();
  }

  function setLanguage(code) {
    if (!isValidLang(code) || code === state.lang) return;
    state.lang = code;
    storageSet(LANG_KEY, code);
    refreshLanguage();
  }

  function refreshLanguage() {
    if (!modalRoot) return;
    applyStaticTexts();
    renderSidebar();
    renderMain();
    if (dialogEl && dlg) buildDialog();
    if (settingsEl) buildSettings();
  }

  function detectDiscordTheme() {
    const lists = [document.documentElement.classList];
    if (document.body) lists.push(document.body.classList);
    if (lists.some((c) => c.contains('theme-light'))) return 'light';
    if (lists.some((c) => c.contains('theme-dark'))) return 'dark';
    return 'dark';
  }

  const effectiveTheme = () => (state.theme === 'auto' ? detectDiscordTheme() : state.theme);

  function applyAppearance() {
    if (!modalRoot) return;
    const overlay = modalRoot.querySelector('.overlay');
    if (!overlay) return;
    overlay.setAttribute('data-theme', effectiveTheme());
    overlay.setAttribute('data-opt', state.optimize ? 'on' : 'off');
  }

  function stopThemeObserver() {
    if (themeObserver) {
      themeObserver.disconnect();
      themeObserver = null;
    }
  }

  function startThemeObserver() {
    stopThemeObserver();
    themeObserver = new MutationObserver(() => {
      if (state.theme === 'auto') applyAppearance();
    });
    const opts = { attributes: true, attributeFilter: ['class'] };
    themeObserver.observe(document.documentElement, opts);
    if (document.body) themeObserver.observe(document.body, opts);
  }

  function setTheme(value) {
    if (!THEMES.includes(value)) return;
    state.theme = value;
    storageSet(THEME_KEY, value);
    applyAppearance();
  }

  function setOptimize(on) {
    state.optimize = !!on;
    storageSet(OPT_KEY, state.optimize);
    applyAppearance();
  }

  async function initSettings() {
    const theme = await storageGet(THEME_KEY);
    if (THEMES.includes(theme)) state.theme = theme;
    const opt = await storageGet(OPT_KEY);
    if (typeof opt === 'boolean') state.optimize = opt;
    applyAppearance();
    if (settingsEl) buildSettings();
  }

  function visibleItems() {
    const q = state.search.trim().toLowerCase();
    let list = state.items.filter((it) => state.category === 'All' || sameCat(it.category, state.category));
    if (q) {
      list = list.filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          String(it.itemID).includes(q) ||
          it.category.toLowerCase().includes(q)
      );
    }

    const { key, dir } = state.sort;
    const m = dir === 'asc' ? 1 : -1;
    list.sort((a, b) => {
      if (key === 'title') return m * a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' });
      if (key === 'itemID') return m * (a.categoryID - b.categoryID || a.itemID - b.itemID);
      return m * (a.count - b.count) || a.title.localeCompare(b.title);
    });
    return list;
  }

  function setSort(key) {
    if (state.sort.key === key) {
      state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sort = { key, dir: key === 'count' ? 'desc' : 'asc' };
    }
    renderMain();
  }

  async function toggleVote(item, btn) {
		let res;

		if (item.voted === false) {
			res = await sendFetch(`https://discord.com/api/v9/channels/947606292376207490/messages/${item.messageID}/reactions/sale_star%3A1498771241903980594/%40me?location=Message%20Inline%20Button&type=0`, "PUT");
		} else if (item.voted === true) {
			res = await sendFetch(`https://discord.com/api/v9/channels/947606292376207490/messages/${item.messageID}/reactions/sale_star%3A1498771241903980594/0/%40me?location=Message%20Inline%20Button&burst=false`, "DELETE");
		}

		if (res && res.ok) {
			item.voted = !item.voted;
			item.count = Math.max(0, item.count + (item.voted ? 1 : -1));

			btn.classList.toggle('voted', item.voted);
			btn.setAttribute('aria-pressed', String(item.voted));

			const label = btn.querySelector('span');
			if (label) label.textContent = fmt(item.count);
		}
	}

  function renderSidebar() {
    const cats = modalRoot.querySelector('.cats');
    cats.textContent = '';

    const counts = {};
    for (const it of state.items) {
      const k = it.category.toLowerCase();
      counts[k] = (counts[k] || 0) + 1;
    }

    let lastGroup = null;
    for (const c of CATEGORIES) {
      if (c.group !== lastGroup && c.group === 'objects') {
        cats.append(el('div', { class: 'group-label', text: t('objects') }));
      }
      lastGroup = c.group;

      const n = c.name === 'All' ? state.items.length : counts[c.name.toLowerCase()] || 0;
      const btn = el(
        'button',
        {
          class: 'cat' + (state.category === c.name ? ' active' : ''),
          type: 'button',
          onclick: () => {
            state.category = c.name;
            renderSidebar();
            renderMain();
            const tw = modalRoot.querySelector('.tablewrap');
            if (tw) tw.scrollTop = 0;
          },
        },
        [
          el('span', { class: 'ico' }, [el('img', { src: c.img, alt: '', loading: 'lazy', referrerpolicy: 'no-referrer' })]),
          el('span', { class: 'name', text: c.labels[state.lang] || c.labels.en }),
          el('span', { class: 'n', text: fmt(n) }),
        ]
      );
      cats.append(btn);
    }
  }

  function renderMain() {
    const head = modalRoot.querySelector('.head');
    const body = modalRoot.querySelector('.tablewrap');
    const list = state.loaded ? visibleItems() : [];

    head.querySelector('h2').textContent = catLabel(state.category);
    head.querySelector('p').textContent = state.loaded
      ? `${fmt(list.length)} ${list.length === 1 ? t('item') : t('items')}${state.search ? ' ' + t('found') : ''}`
      : state.loading
      ? t('loading')
      : '';

    if (ui.copyBtn) ui.copyBtn.disabled = !list.length;

    body.textContent = '';

    if (state.loading && !state.loaded) {
      body.append(
        el('div', { class: 'state' }, [
          el('div', { class: 'spinner' }),
          el('b', { class: 'progress', text: t('fetching') }),
          el('span', { text: t('fetchingSub') }),
        ])
      );
      return;
    }

    if (!state.items.length) {
      body.append(
        el('div', { class: 'state' }, [
          el('b', { text: t('noneTitle') }),
          el('span', { text: t('noneDesc') }),
        ])
      );
      return;
    }

    if (!list.length) {
      body.append(
        el('div', { class: 'state' }, [
          el('b', { text: t('nothingTitle') }),
          el('span', { text: state.search ? t('tryOther') : t('emptyCat') }),
        ])
      );
      return;
    }

    const showCat = state.category === 'All';
    const chosenKeys = new Set(state.chosen.map((c) => `${c.categoryID},${c.itemID}`));

    const th = (label, key, cls = '') => {
      const sorted = state.sort.key === key;
      const arrow = sorted ? (state.sort.dir === 'asc' ? '▲' : '▼') : '';
      return el(
        'th',
        {
          class: `sortable ${cls} ${sorted ? 'sorted' : ''}`.trim(),
          tabindex: '0',
          role: 'button',
          'aria-sort': sorted ? (state.sort.dir === 'asc' ? 'ascending' : 'descending') : 'none',
          onclick: () => setSort(key),
          onkeydown: (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setSort(key);
            }
          },
        },
        [document.createTextNode(label), el('span', { class: 'arrow', text: arrow })]
      );
    };

    const table = el('table');
    table.append(
      el('thead', {}, [
        el('tr', {}, [
          el('th', { text: t('colImage') }),
          th(showCat ? t('colCatId') : t('colId'), 'itemID'),
          th(t('colName'), 'title'),
          th(t('colVotes'), 'count', 'num'),
          el('th', { text: t('colMessage') }),
        ]),
      ])
    );

    const tbody = el('tbody');
    for (const it of list) {
      const img = el('img', { src: it.img, alt: '', loading: 'lazy', referrerpolicy: 'no-referrer' });
      const idCell = el('td', { class: 'id' });
      if (showCat) idCell.append(el('small', { text: catLabel(it.category) }));
      idCell.append(document.createTextNode(String(it.itemID)));

      const isChosen = chosenKeys.has(`${it.categoryID},${it.itemID}`);

      const voteBtn = el('button', {
        class: 'count' + (it.voted ? ' voted' : ''),
        type: 'button',
        title: it.voted ? t('unvote') : t('vote'),
        'aria-pressed': String(it.voted),
        html: SVG.star + '<span>' + fmt(it.count) + '</span>',
      });
      voteBtn.addEventListener('click', async () => {
			await toggleVote(it, voteBtn);
		});

      tbody.append(
        el('tr', isChosen ? { class: 'chosen' } : {}, [
          el('td', { class: 'thumb' }, [
            el(
              'button',
              {
                class: 'thumb-box',
                type: 'button',
                title: t('zoomImage'),
                'aria-label': it.title,
                onclick: () => openLightbox(it),
              },
              [img]
            ),
          ]),
          idCell,
          el('td', { class: 'name' }, [
            document.createTextNode(it.title),
            isChosen ? el('span', { class: 'badge', text: t('chosen') }) : null,
          ]),
          el('td', { class: 'num' }, [voteBtn]),
          el('td', {}, [
            el('a', {
              class: 'link',
              href: MESSAGE_URL + it.messageID,
              target: '_blank',
              rel: 'noopener noreferrer',
              html: '<span>' + t('message') + '</span>' + SVG.ext,
            }),
          ]),
        ])
      );
    }
    table.append(tbody);
    body.append(table);
  }

  function buildLangMenu() {
    ui.langMenu.textContent = '';
    for (const l of LANGS) {
      const active = l.code === state.lang;
      const opt = el(
        'button',
        {
          class: 'lang-opt' + (active ? ' active' : ''),
          type: 'button',
          role: 'option',
          'aria-selected': String(active),
        },
        [
          el('img', { class: 'flag', src: l.img, alt: '' }),
          el('span', { text: l.label }),
          active ? el('span', { html: SVG.check, style: 'flex:none;display:grid' }) : null,
        ]
      );
      opt.addEventListener('click', () => {
        ui.lang.classList.remove('open');
        setLanguage(l.code);
      });
      ui.langMenu.append(opt);
    }
  }

  function applyStaticTexts() {
    const l = getLang();
    ui.searchInput.placeholder = t('searchPlaceholder');
    ui.searchInput.setAttribute('aria-label', t('searchLabel'));
    ui.clearBtn.title = t('clearSearch');
    ui.clearBtn.setAttribute('aria-label', t('clearSearch'));
    ui.refreshBtn.title = t('refresh');
    ui.refreshBtn.setAttribute('aria-label', t('refresh'));
    ui.closeBtn.title = t('close');
    ui.closeBtn.setAttribute('aria-label', t('close'));
    ui.copyBtn.title = t('copyList');
    ui.copyBtn.setAttribute('aria-label', t('copyList'));
    ui.settingsBtn.title = t('settings');
    ui.settingsBtn.setAttribute('aria-label', t('settings'));
    ui.langBtn.title = t('language');
    ui.langBtn.setAttribute('aria-label', t('language'));
    ui.langFlag.src = l.img;
    ui.langCode.textContent = l.short;
    buildLangMenu();
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none;';
      document.body.append(ta);
      ta.select();
      let ok = false;
      try {
        ok = document.execCommand('copy');
      } catch (e) {
        ok = false;
      }
      ta.remove();
      return ok;
    }
  }

  function downloadJson(selection) {
    const data = selection.map((it) => ({
      title: it.title,
      category: it.category,
      categoryID: it.categoryID,
      itemID: it.itemID,
      votes: it.count,
      voted: it.voted === true,
      messageID: it.messageID,
      url: MESSAGE_URL + it.messageID,
    }));
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const slug = state.category.toLowerCase().replace(/\s+/g, '-');
    const day = new Date().toISOString().slice(0, 10);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sale-${slug}-${day}.json`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function setBtnContent(btn, svg, label) {
    btn.innerHTML = svg + '<span>' + label + '</span>';
  }

  function segmented(options, initial, onPick) {
    let current = initial;
    const node = el('div', { class: 'seg', role: 'group' });
    const buttons = options.map((o) => {
      const b = el('button', { type: 'button', text: o.label });
      b.addEventListener('click', () => {
        current = o.value;
        sync();
        onPick(o.value);
      });
      node.append(b);
      return { b, o };
    });
    function sync() {
      for (const { b, o } of buttons) {
        const on = o.value === current;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      }
    }
    sync();
    return node;
  }

  function closeDialog() {
    if (dialogEl) {
      dialogEl.remove();
      dialogEl = null;
    }
    dlg = null;
    if (modalRoot) {
      const overlay = modalRoot.querySelector('.overlay');
      if (overlay) overlay.focus();
    }
  }

  function closeSettings() {
    if (settingsEl) {
      settingsEl.remove();
      settingsEl = null;
    }
    if (modalRoot) {
      const overlay = modalRoot.querySelector('.overlay');
      if (overlay) overlay.focus();
    }
  }

  function openSettings() {
    if (!modalRoot) return;
    buildSettings();
  }

  function buildSettings() {
    if (settingsEl) settingsEl.remove();
    const panel = modalRoot.querySelector('.panel');

    const themeSeg = segmented(
      [
        { value: 'dark', label: t('themeDark') },
        { value: 'light', label: t('themeLight') },
        { value: 'auto', label: t('themeAuto') },
      ],
      state.theme,
      setTheme
    );

    const sw = el(
      'button',
      {
        class: 'switch' + (state.optimize ? ' on' : ''),
        type: 'button',
        role: 'switch',
        'aria-checked': String(state.optimize),
        'aria-label': t('optimization'),
      },
      [el('span', { class: 'knob' })]
    );
    sw.addEventListener('click', () => {
      setOptimize(!state.optimize);
      sw.classList.toggle('on', state.optimize);
      sw.setAttribute('aria-checked', String(state.optimize));
    });

    const closeBtn = el('button', {
      class: 'icon-btn',
      type: 'button',
      title: t('close'),
      'aria-label': t('close'),
      html: SVG.close,
      onclick: closeSettings,
    });

    settingsEl = el('div', { class: 'dlg-overlay', tabindex: '-1' }, [
      el('div', { class: 'dlg sm', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('settings') }, [
        el('div', { class: 'dlg-head' }, [
          el('div', { class: 'dlg-ico', html: SVG.settings }),
          el('div', { class: 'dlg-title' }, [
            el('h3', { text: t('settings') }),
          ]),
          closeBtn,
        ]),
        el('div', { class: 'dlg-body' }, [
          el('div', { class: 'field' }, [
            el('span', { class: 'field-label', text: t('theme') }),
            themeSeg,
            el('p', { class: 'hint-text', text: t('themeAutoHint') }),
          ]),
          el('div', { class: 'field' }, [
            el('span', { class: 'field-label', text: t('performance') }),
            el('div', { class: 'set-row' }, [
              el('div', { class: 'set-text' }, [
                el('b', { text: t('optimization') }),
                el('span', { text: t('optimizationDesc') }),
              ]),
              sw,
            ]),
          ]),
        ]),
      ]),
    ]);

    settingsEl.addEventListener('mousedown', (e) => {
      if (e.target === settingsEl) closeSettings();
    });

    panel.append(settingsEl);
    settingsEl.focus();
  }

  function closeLightbox() {
    if (lightEl) {
      lightEl.remove();
      lightEl = null;
    }
    if (modalRoot) {
      const overlay = modalRoot.querySelector('.overlay');
      if (overlay) overlay.focus();
    }
  }

  function openLightbox(item) {
    if (!modalRoot || !item.img) return;
    if (lightEl) {
      lightEl.remove();
      lightEl = null;
    }
    const panel = modalRoot.querySelector('.panel');

    const img = el('img', { src: item.img, alt: item.title, referrerpolicy: 'no-referrer', draggable: 'false' });

    const card = el('div', { class: 'lb-card' }, [
      el('div', { class: 'lb-stage' }, [img]),
      el('div', { class: 'lb-info' }, [
        el('h3', { class: 'lb-name', text: item.title }),
        el('div', { class: 'lb-tags' }, [
          item.category ? el('span', { class: 'lb-tag', text: catLabel(item.category) }) : null,
          el('span', { class: 'lb-tag', text: `${t('colId')} ${item.itemID}` }),
          el('span', { class: 'lb-tag votes', html: SVG.star + '<span>' + fmt(item.count) + '</span>' }),
        ]),
      ]),
    ]);

    lightEl = el('div', { class: 'lb-overlay', tabindex: '-1', role: 'dialog', 'aria-modal': 'true', 'aria-label': item.title }, [card]);

    lightEl.addEventListener('mousedown', (e) => {
      if (!card.contains(e.target)) closeLightbox();
    });

    panel.append(lightEl);
    lightEl.focus();
  }

  function openCopyDialog() {
    if (!modalRoot) return;
    const list = visibleItems();
    if (!list.length) return;
    dlg = { list, mode: 'first10', custom: '10', layout: 'lines', sep: ', ', fields: { id: false, name: true, votes: false } };
    buildDialog();
  }

  function buildDialog() {
    if (dialogEl) dialogEl.remove();
    const panel = modalRoot.querySelector('.panel');
    const list = dlg.list;

    const selection = () => {
      let n = list.length;
      if (dlg.mode === 'first10') n = Math.min(10, list.length);
      else if (dlg.mode === 'custom') {
        const v = parseInt(dlg.custom, 10);
        n = Number.isFinite(v) && v > 0 ? Math.min(v, list.length) : 0;
      }
      return list.slice(0, n);
    };

    const showCat = state.category === 'All';

    const lineFor = (it) => {
      const parts = [];
      if (dlg.fields.id) parts.push(showCat ? `${catLabel(it.category)} ${it.itemID}` : String(it.itemID));
      if (dlg.fields.name) parts.push(it.title);
      if (dlg.fields.votes) parts.push(String(it.count));
      return parts.join(' - ');
    };

    const textFor = (sel) => sel.map(lineFor).join(dlg.layout === 'inline' ? dlg.sep : '\n');

    const preview = el('textarea', { class: 'preview', readonly: '', spellcheck: 'false', 'aria-label': t('preview') });
    const countEl = el('span', { class: 'dlg-count' });

    const copyBtn = el('button', { class: 'btn primary', type: 'button' });
    setBtnContent(copyBtn, SVG.copy, t('copy'));
    const jsonBtn = el('button', { class: 'btn ghost', type: 'button' });
    setBtnContent(jsonBtn, SVG.download, t('downloadJson'));

    const customInput = el('input', {
      class: 'input num-input',
      type: 'number',
      min: '1',
      max: String(list.length),
      value: dlg.custom,
      'aria-label': t('specific'),
    });
    const customRow = el('div', { class: 'row' }, [customInput, el('span', { class: 'hint', text: '/ ' + fmt(list.length) })]);

    const sepInput = el('input', {
      class: 'input sep-input',
      type: 'text',
      value: dlg.sep,
      maxlength: '12',
      spellcheck: 'false',
      'aria-label': t('separator'),
    });
    const sepRow = el('div', { class: 'row' }, [el('span', { class: 'field-label', text: t('separator') }), sepInput]);

    const chipDefs = [
      { key: 'id', label: showCat ? t('fCatId') : t('fId') },
      { key: 'name', label: t('fName') },
      { key: 'votes', label: t('fVotes') },
    ];
    const chips = el('div', { class: 'chips', role: 'group' });
    const chipEls = chipDefs.map((d) => {
      const chip = el('button', { class: 'chip', type: 'button' }, [
        el('span', { class: 'box', html: SVG.check }),
        el('span', { text: d.label }),
      ]);
      chip.addEventListener('click', () => {
        const next = !dlg.fields[d.key];
        const others = chipDefs.filter((x) => x.key !== d.key && dlg.fields[x.key]).length;
        if (!next && !others) return;
        dlg.fields[d.key] = next;
        refresh();
      });
      chips.append(chip);
      return { chip, key: d.key };
    });

    const refresh = () => {
      for (const { chip, key } of chipEls) {
        chip.classList.toggle('active', dlg.fields[key]);
        chip.setAttribute('aria-pressed', String(dlg.fields[key]));
      }
      const sel = selection();
      preview.value = sel.length ? textFor(sel) : '';
      countEl.textContent = t('selected', { n: fmt(sel.length) });
      copyBtn.disabled = !sel.length;
      jsonBtn.disabled = !sel.length;
      customRow.style.display = dlg.mode === 'custom' ? '' : 'none';
      sepRow.style.display = dlg.layout === 'inline' ? '' : 'none';
    };

    customInput.addEventListener('input', () => {
      dlg.custom = customInput.value;
      refresh();
    });
    sepInput.addEventListener('input', () => {
      dlg.sep = sepInput.value;
      refresh();
    });

    const qtySeg = segmented(
      [
        { value: 'first10', label: t('first10') },
        { value: 'custom', label: t('specific') },
        { value: 'all', label: t('allItems') },
      ],
      dlg.mode,
      (v) => {
        dlg.mode = v;
        refresh();
        if (v === 'custom') customInput.focus();
      }
    );

    const layoutSeg = segmented(
      [
        { value: 'lines', label: t('onePerLine') },
        { value: 'inline', label: t('sameLine') },
      ],
      dlg.layout,
      (v) => {
        dlg.layout = v;
        refresh();
      }
    );

    copyBtn.addEventListener('click', async () => {
      const sel = selection();
      if (!sel.length) return;
      const ok = await copyText(textFor(sel));
      if (!ok || !copyBtn.isConnected) return;
      copyBtn.classList.add('done');
      setBtnContent(copyBtn, SVG.check, t('copied'));
      setTimeout(() => {
        if (!copyBtn.isConnected) return;
        copyBtn.classList.remove('done');
        setBtnContent(copyBtn, SVG.copy, t('copy'));
      }, 1600);
    });

    jsonBtn.addEventListener('click', () => {
      const sel = selection();
      if (sel.length) downloadJson(sel);
    });

    const closeBtn = el('button', {
      class: 'icon-btn',
      type: 'button',
      title: t('close'),
      'aria-label': t('close'),
      html: SVG.close,
      onclick: closeDialog,
    });

    dialogEl = el('div', { class: 'dlg-overlay', tabindex: '-1' }, [
      el('div', { class: 'dlg', role: 'dialog', 'aria-modal': 'true', 'aria-label': t('copyTitle') }, [
        el('div', { class: 'dlg-head' }, [
          el('div', { class: 'dlg-ico', html: SVG.fileDown }),
          el('div', { class: 'dlg-title' }, [
            el('h3', { text: t('copyTitle') }),
            el('p', { text: t('copySubtitle', { cat: catLabel(state.category), n: fmt(list.length) }) }),
          ]),
          closeBtn,
        ]),
        el('div', { class: 'dlg-body' }, [
          el('div', { class: 'field' }, [el('span', { class: 'field-label', text: t('quantity') }), qtySeg, customRow]),
          el('div', { class: 'field' }, [el('span', { class: 'field-label', text: t('content') }), chips]),
          el('div', { class: 'field' }, [el('span', { class: 'field-label', text: t('format') }), layoutSeg, sepRow]),
          el('div', { class: 'field' }, [
            el('div', { class: 'field-top' }, [el('span', { class: 'field-label', text: t('preview') }), countEl]),
            preview,
          ]),
        ]),
        el('div', { class: 'dlg-foot' }, [jsonBtn, copyBtn]),
      ]),
    ]);

    dialogEl.addEventListener('mousedown', (e) => {
      if (e.target === dialogEl) closeDialog();
    });

    panel.append(dialogEl);
    refresh();
    dialogEl.focus();
  }

  async function loadData() {
    if (state.loading) return;
    state.loading = true;
    state.loaded = false;
    renderMain();

    try {
      const result = await fetchAllItems((n) => {
        const p = modalRoot && modalRoot.querySelector('.progress');
        if (p) p.textContent = t('itemsFound', { n: fmt(n) });
      });
      state.items = result.items;
      state.chosen = result.chosen;
    } catch (err) {
      console.error('[Discord Sale] erro ao buscar mensagens:', err);
      state.items = [];
      state.chosen = [];
    }

    state.loading = false;
    state.loaded = true;
    if (modalRoot) {
      renderSidebar();
      renderMain();
    }
  }

  function closeModal() {
    if (modalHost) {
      stopThemeObserver();
      modalHost.remove();
      modalHost = null;
      modalRoot = null;
      dialogEl = null;
      settingsEl = null;
      lightEl = null;
      dlg = null;
      ui = {};
    }
  }

  function openModal() {
    if (modalHost) return;

    state.search = '';

    modalHost = document.createElement('div');
    modalHost.setAttribute('data-sale-modal', '');
    modalRoot = modalHost.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = CSS;

    const searchInput = el('input', {
      type: 'text',
      spellcheck: 'false',
      autocomplete: 'off',
    });

    const clearBtn = el('button', {
      class: 'search-clear',
      type: 'button',
      html: SVG.close,
    });

    const searchBox = el('div', { class: 'search', html: SVG.search }, [searchInput, clearBtn]);

    searchInput.addEventListener('input', () => {
      state.search = searchInput.value;
      searchBox.classList.toggle('has-value', !!searchInput.value);
      renderMain();
    });

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.search = '';
      searchBox.classList.remove('has-value');
      renderMain();
      searchInput.focus();
    });

    const langFlag = el('img', { class: 'flag', alt: '' });
    const langCode = el('span');
    const langBtn = el('button', { class: 'lang-btn', type: 'button', 'aria-haspopup': 'listbox' }, [
      langFlag,
      langCode,
      el('span', { html: SVG.chevron, style: 'display:grid' }),
    ]);
    const langMenu = el('div', { class: 'lang-menu', role: 'listbox' });
    const lang = el('div', { class: 'lang' }, [langBtn, langMenu]);
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lang.classList.toggle('open');
    });

    const copyBtn = el('button', { class: 'icon-btn copy-btn', type: 'button', html: SVG.fileDown });
    copyBtn.addEventListener('click', () => {
      copyBtn.classList.remove('pulse');
      void copyBtn.offsetWidth;
      copyBtn.classList.add('pulse');
      openCopyDialog();
    });
    copyBtn.addEventListener('animationend', () => copyBtn.classList.remove('pulse'));

    const refreshBtn = el('button', { class: 'icon-btn', type: 'button', html: SVG.refresh, onclick: loadData });
    const settingsBtn = el('button', { class: 'icon-btn settings-btn', type: 'button', html: SVG.settings, onclick: openSettings });
    const closeBtn = el('button', { class: 'icon-btn', type: 'button', html: SVG.close, onclick: closeModal });

    ui = { searchInput, clearBtn, langBtn, langFlag, langCode, langMenu, lang, copyBtn, refreshBtn, settingsBtn, closeBtn };

    const overlay = el('div', { class: 'overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Sale', tabindex: '-1' }, [
      el('div', { class: 'panel' }, [
        el('aside', { class: 'side' }, [
          el('div', { class: 'brand' }, [
            el('img', { src: MODAL_BRAND_GIF, alt: '' }),
            el('div', {}, [el('b', { text: 'Sale' }), el('span', { text: '' })]),
          ]),
          el('div', { class: 'cats' }),
        ]),
        el('section', { class: 'main' }, [
          el('header', { class: 'head' }, [
            el('div', { class: 'title' }, [el('h2'), el('p')]),
            searchBox,
            lang,
            copyBtn,
            settingsBtn,
            refreshBtn,
            closeBtn,
          ]),
          el('div', { class: 'tablewrap' }),
        ]),
      ]),
    ]);

    overlay.addEventListener('mousedown', (e) => {
      if (e.target === overlay) {
        closeModal();
        return;
      }
      if (!e.composedPath().includes(lang)) lang.classList.remove('open');
    });

    modalHost.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Escape') {
        if (lang.classList.contains('open')) lang.classList.remove('open');
        else if (lightEl) closeLightbox();
        else if (settingsEl) closeSettings();
        else if (dialogEl) closeDialog();
        else closeModal();
      }
    });
    modalHost.addEventListener('keyup', (e) => e.stopPropagation());
    modalHost.addEventListener('keypress', (e) => e.stopPropagation());

    modalRoot.append(style, overlay);
    document.body.append(modalHost);

    applyAppearance();
    startThemeObserver();

    applyStaticTexts();
    renderSidebar();
    renderMain();

    overlay.focus();

    if (!state.loaded) loadData();
  }

  const isTargetChannel = () =>
    location.pathname.startsWith(`/channels/${GUILD_ID}/${CHANNEL_ID}`);

  function buildButton(tplContainer, tplButton) {
    const box = document.createElement('div');
    box.className = tplContainer
      ? tplContainer.className.replace('expression-picker-chat-input-button', '').trim()
      : '';
    box.setAttribute(BTN_ATTR, '');

    const btn = document.createElement('div');
    const baseClasses = tplButton
      ? [...tplButton.classList].filter((c) => /^button_/.test(c))
      : [];
    btn.className = baseClasses.join(' ');
    btn.setAttribute('role', 'button');
    btn.setAttribute('tabindex', '0');
    btn.setAttribute('aria-label', 'Sale');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.style.cssText = 'cursor:pointer;display:flex;align-items:center;justify-content:center;';

    const img = document.createElement('img');
    img.alt = '';
    img.draggable = false;
    img.style.cssText = 'width:24px;height:24px;object-fit:contain;display:block;';

    for (const icons of Object.values(BUTTON_ICONS)) {
      const preload = new Image();
      preload.src = icons.gif;
    }

    let animated = false;
    const paint = () => {
      const icons = BUTTON_ICONS[detectDiscordTheme()] || BUTTON_ICONS.dark;
      const url = animated ? icons.gif : icons.png;
      if (img.getAttribute('src') !== url) img.src = url;
    };
    const setAnimated = (on) => {
      animated = on;
      paint();
    };
    paint();
    box.salePaint = paint;

    btn.addEventListener('mouseenter', () => setAnimated(true));
    btn.addEventListener('mouseleave', () => setAnimated(false));
    btn.addEventListener('focus', () => setAnimated(true));
    btn.addEventListener('blur', () => setAnimated(false));

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal();
    });
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    btn.append(img);
    box.append(btn);
    return box;
  }

  function injectButton() {
    if (!isTargetChannel()) {
      closeModal();
      return;
    }

    const bar = document.querySelector('[class*="sansAttachButton_"]');
    if (!bar) return;

    const buttons = bar.querySelector('[class^="buttons_"], [class*=" buttons_"]');
    if (!buttons) return;

    const existing = buttons.querySelector(`[${BTN_ATTR}]`);
    if (existing) {
      if (existing.salePaint) existing.salePaint();
      return;
    }

    const tplContainer = buttons.querySelector('[class*="buttonContainer_"]');
    if (!tplContainer) return;
    const tplButton = tplContainer.querySelector('[role="button"]');

    buttons.prepend(buildButton(tplContainer, tplButton));
  }

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      injectButton();
    });
  };

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('popstate', schedule);
  setInterval(schedule, 1500);
  initLanguage();
  initSettings();
  schedule();
})();
