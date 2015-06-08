function bootstrap(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.bootstrap=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'startup', $intern_5 = 'DUMMY', $intern_6 = 0, $intern_7 = 1, $intern_8 = 'iframe', $intern_9 = 'javascript:""', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_11 = ' top: -1000px;', $intern_12 = 'CSS1Compat', $intern_13 = '<!doctype html>', $intern_14 = '', $intern_15 = '<html><head><\/head><body><\/body><\/html>', $intern_16 = 'undefined', $intern_17 = 'DOMContentLoaded', $intern_18 = 50, $intern_19 = 'script', $intern_20 = 'javascript', $intern_21 = 'Failed to load ', $intern_22 = 'moduleStartup', $intern_23 = 'scriptTagAdded', $intern_24 = 'moduleRequested', $intern_25 = 'meta', $intern_26 = 'name', $intern_27 = 'bootstrap::', $intern_28 = '::', $intern_29 = 'gwt:property', $intern_30 = 'content', $intern_31 = '=', $intern_32 = 'gwt:onPropertyErrorFn', $intern_33 = 'Bad handler "', $intern_34 = '" for "gwt:onPropertyErrorFn"', $intern_35 = 'gwt:onLoadErrorFn', $intern_36 = '" for "gwt:onLoadErrorFn"', $intern_37 = '#', $intern_38 = '?', $intern_39 = '/', $intern_40 = 'img', $intern_41 = 'clear.cache.gif', $intern_42 = 'baseUrl', $intern_43 = 'bootstrap.nocache.js', $intern_44 = 'base', $intern_45 = '//', $intern_46 = 'user.agent', $intern_47 = 'webkit', $intern_48 = 'safari', $intern_49 = 'msie', $intern_50 = 10, $intern_51 = 11, $intern_52 = 'ie10', $intern_53 = 9, $intern_54 = 'ie9', $intern_55 = 8, $intern_56 = 'ie8', $intern_57 = 'gecko', $intern_58 = 'gecko1_8', $intern_59 = 2, $intern_60 = 3, $intern_61 = 4, $intern_62 = 'selectingPermutation', $intern_63 = 'bootstrap.devmode.js', $intern_64 = '3EEED2992B3718D12D7550FAD9F15D4F', $intern_65 = '83946B3937DFE5C6E579A0674A415D54', $intern_66 = '859C10B8FF4D810BE056BEDE4AF1C537', $intern_67 = 'A693656AF805057E9EE21A11B9A85D41', $intern_68 = 'FE9A715C92989F60C7A6E359CFE2FD8A', $intern_69 = ':', $intern_70 = '.cache.js', $intern_71 = 'link', $intern_72 = 'rel', $intern_73 = 'stylesheet', $intern_74 = 'href', $intern_75 = 'head', $intern_76 = 'loadExternalRefs', $intern_77 = 'gwt/clean/clean.css', $intern_78 = 'css/bootstrap.min.css', $intern_79 = 'css/gwt-bootstrap.css', $intern_80 = 'css/font-awesome.min.css', $intern_81 = 'end', $intern_82 = 'http:', $intern_83 = 'file:', $intern_84 = '_gwt_dummy_', $intern_85 = '__gwtDevModeHook:bootstrap', $intern_86 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_87 = ':moduleBase';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_0, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_4, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  bootstrap.__sendStats = sendStats;
  bootstrap.__moduleName = $intern_0;
  bootstrap.__errFn = null;
  bootstrap.__moduleBase = $intern_5;
  bootstrap.__softPermutationId = $intern_6;
  bootstrap.__computePropValue = null;
  bootstrap.__getPropMap = null;
  bootstrap.__installRunAsyncCode = function(){
  }
  ;
  bootstrap.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  bootstrap.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  bootstrap.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_0] = {moduleName:$intern_0};
  bootstrap.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules[$intern_0].bindings;
    activeModules[$intern_0].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[bootstrap.__softPermutationId];
      for (var i = $intern_6; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[$intern_6]] = pair[$intern_7];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_8);
    scriptFrame.src = $intern_9;
    scriptFrame.id = $intern_0;
    scriptFrame.style.cssText = $intern_10 + $intern_11;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_12?$intern_13:$intern_14;
    frameDoc.write(doctype + $intern_15);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_16) {
          return typeof $doc.body != $intern_16 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_17, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_17, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , $intern_18);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement($intern_19);
      script.language = $intern_20;
      script.src = code_0;
      if (bootstrap.__errFn) {
        script.onerror = function(){
          bootstrap.__errFn($intern_0, new Error($intern_21 + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats($intern_22, $intern_23);
    }

    sendStats($intern_22, $intern_24);
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  bootstrap.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  bootstrap.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement($intern_19);
    script.language = $intern_20;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_25);
    for (var i = $intern_6, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_26), content;
      if (name_0) {
        name_0 = name_0.replace($intern_27, $intern_14);
        if (name_0.indexOf($intern_28) >= $intern_6) {
          continue;
        }
        if (name_0 == $intern_29) {
          content = meta.getAttribute($intern_30);
          if (content) {
            var value_0, eq = content.indexOf($intern_31);
            if (eq >= $intern_6) {
              name_0 = content.substring($intern_6, eq);
              value_0 = content.substring(eq + $intern_7);
            }
             else {
              name_0 = content;
              value_0 = $intern_14;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_32) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_34);
            }
          }
        }
         else if (name_0 == $intern_35) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_36);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    bootstrap.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_37);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_38);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_39, Math.min(queryIndex, hashIndex));
      return slashIndex >= $intern_6?path.substring($intern_6, slashIndex + $intern_7):$intern_14;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_40);
        img.src = url_0 + $intern_41;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_42);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_14;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_19);
      for (var i = $intern_6; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_43) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_14;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_44);
      if (baseElements.length > $intern_6) {
        return baseElements[baseElements.length - $intern_7].href;
      }
      return $intern_14;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_45 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_14) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_14) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_14 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return bootstrap.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_6;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = $intern_6, n = propValArray.length - $intern_7; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_46] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var docMode = $doc.documentMode;
      if (function(){
        return ua.indexOf($intern_47) != -1;
      }
      ())
        return $intern_48;
      if (function(){
        return ua.indexOf($intern_49) != -1 && (docMode >= $intern_50 && docMode < $intern_51);
      }
      ())
        return $intern_52;
      if (function(){
        return ua.indexOf($intern_49) != -1 && (docMode >= $intern_53 && docMode < $intern_51);
      }
      ())
        return $intern_54;
      if (function(){
        return ua.indexOf($intern_49) != -1 && (docMode >= $intern_55 && docMode < $intern_51);
      }
      ())
        return $intern_56;
      if (function(){
        return ua.indexOf($intern_57) != -1 || docMode >= $intern_51;
      }
      ())
        return $intern_58;
      return $intern_14;
    }
    ;
    values[$intern_46] = {gecko1_8:$intern_6, ie10:$intern_7, ie8:$intern_59, ie9:$intern_60, safari:$intern_61};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    bootstrap.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    bootstrap.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_0].bindings = bootstrap.__getPropMap;
    sendStats($intern_0, $intern_62);
    if (isHostedMode()) {
      return computeUrlForResource($intern_63);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_56], $intern_64);
      unflattenKeylistIntoAnswers([$intern_52], $intern_65);
      unflattenKeylistIntoAnswers([$intern_58], $intern_66);
      unflattenKeylistIntoAnswers([$intern_48], $intern_67);
      unflattenKeylistIntoAnswers([$intern_54], $intern_68);
      strongName = answers[computePropValue($intern_46)];
      var idx = strongName.indexOf($intern_69);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_7), $intern_50);
        strongName = strongName.substring($intern_6, idx);
      }
    }
     catch (e) {
    }
    bootstrap.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_70);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc.createElement($intern_71);
        l.setAttribute($intern_72, $intern_73);
        l.setAttribute($intern_74, computeUrlForResource(stylesheetUrl));
        $doc.getElementsByTagName($intern_75)[$intern_6].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats($intern_76, $intern_1);
    installOneStylesheet($intern_77);
    installOneStylesheet($intern_78);
    installOneStylesheet($intern_79);
    installOneStylesheet($intern_80);
    sendStats($intern_76, $intern_81);
  }

  processMetas();
  bootstrap.__moduleBase = computeScriptBase();
  activeModules[$intern_0].moduleBase = bootstrap.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_82 || $wnd.location.protocol == $intern_83);
    $wnd.__gwt_activeModules[$intern_0].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_84;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_85;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_86 + devModeUrl);
        }
        devModeUrl = $intern_14;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_87] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_19);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_75)[$intern_6];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[$intern_6]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_81);
  installScript(filename);
  return true;
}

bootstrap.succeeded = bootstrap();
