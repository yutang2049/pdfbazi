/**
 * SCORM 2004 API Wrapper
 * 四柱八字命理学课程 - SCORM 通信接口封装
 */

var scormAPI = (function() {
    var API = null;
    var findAPITries = 0;
    var maxTries = 500;
    
    /**
     * 查找SCORM API对象
     */
    function findAPI(win) {
        while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win)) {
            findAPITries++;
            if (findAPITries > maxTries) {
                return null;
            }
            win = win.parent;
        }
        return win.API_1484_11;
    }
    
    /**
     * 获取SCORM API对象
     */
    function getAPI() {
        if (API == null) {
            API = findAPI(window);
            if (API == null && window.opener != null) {
                API = findAPI(window.opener);
            }
        }
        return API;
    }
    
    /**
     * 初始化SCORM会话
     */
    function initialize() {
        var api = getAPI();
        if (api == null) {
            console.warn("SCORM API not found - running in standalone mode");
            return "true";
        }
        
        var result = api.Initialize("");
        if (result == "false") {
            var errorCode = api.GetLastError();
            console.error("Initialize failed: " + errorCode);
        }
        return result;
    }
    
    /**
     * 结束SCORM会话
     */
    function terminate() {
        var api = getAPI();
        if (api == null) {
            return "true";
        }
        
        var result = api.Terminate("");
        if (result == "false") {
            var errorCode = api.GetLastError();
            console.error("Terminate failed: " + errorCode);
        }
        return result;
    }
    
    /**
     * 获取SCORM数据
     */
    function getValue(element) {
        var api = getAPI();
        if (api == null) {
            return "";
        }
        
        var value = api.GetValue(element);
        var errorCode = api.GetLastError();
        if (errorCode != "0") {
            console.error("GetValue(" + element + ") failed: " + errorCode);
        }
        return value;
    }
    
    /**
     * 设置SCORM数据
     */
    function setValue(element, value) {
        var api = getAPI();
        if (api == null) {
            return "true";
        }
        
        var result = api.SetValue(element, value);
        if (result == "false") {
            var errorCode = api.GetLastError();
            console.error("SetValue(" + element + ", " + value + ") failed: " + errorCode);
        }
        return result;
    }
    
    /**
     * 提交数据到LMS
     */
    function commit() {
        var api = getAPI();
        if (api == null) {
            return "true";
        }
        
        var result = api.Commit("");
        if (result == "false") {
            var errorCode = api.GetLastError();
            console.error("Commit failed: " + errorCode);
        }
        return result;
    }
    
    /**
     * 获取最后的错误代码
     */
    function getLastError() {
        var api = getAPI();
        if (api == null) {
            return "0";
        }
        return api.GetLastError();
    }
    
    /**
     * 获取错误描述
     */
    function getErrorString(errorCode) {
        var api = getAPI();
        if (api == null) {
            return "";
        }
        return api.GetErrorString(errorCode);
    }
    
    /**
     * 获取详细错误诊断信息
     */
    function getDiagnostic(errorCode) {
        var api = getAPI();
        if (api == null) {
            return "";
        }
        return api.GetDiagnostic(errorCode);
    }
    
    /**
     * 设置完成状态
     */
    function setCompleted() {
        setValue("cmi.completion_status", "completed");
        commit();
    }
    
    /**
     * 设置成功状态
     */
    function setPassed() {
        setValue("cmi.success_status", "passed");
        commit();
    }
    
    /**
     * 设置失败状态
     */
    function setFailed() {
        setValue("cmi.success_status", "failed");
        commit();
    }
    
    /**
     * 设置分数
     */
    function setScore(raw, min, max) {
        setValue("cmi.score.raw", raw.toString());
        setValue("cmi.score.min", min.toString());
        setValue("cmi.score.max", max.toString());
        
        // 计算百分比
        if (max > min) {
            var scaled = (raw - min) / (max - min);
            setValue("cmi.score.scaled", scaled.toString());
        }
        
        commit();
    }
    
    /**
     * 设置会话时间
     */
    function setSessionTime(seconds) {
        // 转换为ISO 8601持续时间格式 PT[H]H:MM:SS
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds % 3600) / 60);
        var secs = seconds % 60;
        
        var timeStr = "PT" + hours + "H" + minutes + "M" + secs + "S";
        setValue("cmi.session_time", timeStr);
        commit();
    }
    
    // 记录会话开始时间
    var sessionStartTime = new Date().getTime();
    
    /**
     * 页面卸载时自动提交会话时间
     */
    function onUnload() {
        var currentTime = new Date().getTime();
        var sessionSeconds = Math.floor((currentTime - sessionStartTime) / 1000);
        setSessionTime(sessionSeconds);
        terminate();
    }
    
    // 返回公共接口
    return {
        initialize: initialize,
        terminate: terminate,
        getValue: getValue,
        setValue: setValue,
        commit: commit,
        getLastError: getLastError,
        getErrorString: getErrorString,
        getDiagnostic: getDiagnostic,
        setCompleted: setCompleted,
        setPassed: setPassed,
        setFailed: setFailed,
        setScore: setScore,
        setSessionTime: setSessionTime,
        onUnload: onUnload
    };
})();

// 页面加载时初始化SCORM
window.addEventListener('load', function() {
    scormAPI.initialize();
});

// 页面卸载时终止SCORM会话
window.addEventListener('beforeunload', function() {
    scormAPI.onUnload();
});
