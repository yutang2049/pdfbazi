/**
 * 测验交互逻辑
 * 四柱八字命理学课程 - 测验功能实现
 */

var QuizEngine = (function() {
    var questions = [];
    var answers = {};
    var score = 0;
    var totalQuestions = 0;
    var submitted = false;
    
    /**
     * 初始化测验
     */
    function init(quizData) {
        questions = quizData;
        totalQuestions = questions.length;
        answers = {};
        score = 0;
        submitted = false;
        renderQuiz();
    }
    
    /**
     * 渲染测验题目
     */
    function renderQuiz() {
        var container = document.getElementById('quiz-container');
        if (!container) return;
        
        var html = '';
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            html += '<div class="question-block" id="question-' + i + '">';
            html += '<div class="question-title">第' + (i + 1) + '题：' + q.question + '</div>';
            html += '<div class="question-options">';
            
            for (var j = 0; j < q.options.length; j++) {
                var optionId = 'q' + i + '_opt' + j;
                html += '<div class="option">';
                html += '<input type="radio" name="q' + i + '" id="' + optionId + '" value="' + j + '">';
                html += '<label for="' + optionId + '">' + q.options[j] + '</label>';
                html += '</div>';
            }
            
            html += '</div>';
            html += '<div class="feedback" id="feedback-' + i + '"></div>';
            html += '</div>';
        }
        container.innerHTML = html;
        
        // 添加选项点击事件
        var inputs = container.querySelectorAll('input[type="radio"]');
        for (var k = 0; k < inputs.length; k++) {
            inputs[k].addEventListener('change', handleAnswer);
        }
    }
    
    /**
     * 处理答案选择
     */
    function handleAnswer(event) {
        if (submitted) return;
        
        var input = event.target;
        var name = input.name;
        var questionIndex = parseInt(name.substring(1));
        var selectedOption = parseInt(input.value);
        
        answers[questionIndex] = selectedOption;
        
        // 即时反馈模式下立即显示结果
        if (!submitted) {
            showQuestionFeedback(questionIndex, selectedOption);
        }
    }
    
    /**
     * 显示单题反馈
     */
    function showQuestionFeedback(questionIndex, selectedOption) {
        var question = questions[questionIndex];
        var feedback = document.getElementById('feedback-' + questionIndex);
        var isCorrect = selectedOption === question.correct;
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.innerHTML = '✓ 正确！' + (question.explanation || '');
        } else {
            feedback.className = 'feedback incorrect';
            feedback.innerHTML = '✗ 错误。正确答案是：' + question.options[question.correct] + 
                               (question.explanation ? '<br>' + question.explanation : '');
        }
    }
    
    /**
     * 提交测验
     */
    function submit() {
        if (submitted) {
            alert('您已经提交过测验了');
            return;
        }
        
        // 检查是否所有题目都已回答
        if (Object.keys(answers).length < totalQuestions) {
            alert('请回答所有题目后再提交');
            return;
        }
        
        submitted = true;
        calculateScore();
        displayResults();
        
        // 上报SCORM分数
        if (typeof scormAPI !== 'undefined') {
            scormAPI.setScore(score, 0, 100);
            
            if (score >= 60) {
                scormAPI.setPassed();
            } else {
                scormAPI.setFailed();
            }
            
            scormAPI.setCompleted();
        }
    }
    
    /**
     * 计算分数
     */
    function calculateScore() {
        var correct = 0;
        for (var i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].correct) {
                correct++;
            }
        }
        score = Math.round((correct / totalQuestions) * 100);
    }
    
    /**
     * 显示测验结果
     */
    function displayResults() {
        var resultsDiv = document.getElementById('quiz-results');
        if (!resultsDiv) return;
        
        var html = '<div class="results-box">';
        html += '<h2>测验完成</h2>';
        html += '<div class="score-display">您的得分：<span class="score">' + score + '</span> 分</div>';
        
        if (score >= 60) {
            html += '<div class="pass-status pass">恭喜通过！</div>';
            html += '<p>您已掌握本章节的核心知识点，可以继续学习下一章。</p>';
        } else {
            html += '<div class="pass-status fail">未通过</div>';
            html += '<p>建议您复习本章节内容后重新测验。</p>';
        }
        
        html += '</div>';
        resultsDiv.innerHTML = html;
        resultsDiv.style.display = 'block';
        
        // 显示所有题目的正确答案
        for (var i = 0; i < questions.length; i++) {
            showQuestionFeedback(i, answers[i]);
        }
    }
    
    /**
     * 重新开始测验
     */
    function reset() {
        answers = {};
        score = 0;
        submitted = false;
        
        // 清除所有选项
        var inputs = document.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        
        // 清除所有反馈
        var feedbacks = document.querySelectorAll('.feedback');
        for (var j = 0; j < feedbacks.length; j++) {
            feedbacks[j].className = 'feedback';
            feedbacks[j].innerHTML = '';
        }
        
        // 隐藏结果
        var resultsDiv = document.getElementById('quiz-results');
        if (resultsDiv) {
            resultsDiv.style.display = 'none';
        }
    }
    
    /**
     * 获取当前分数
     */
    function getScore() {
        return score;
    }
    
    /**
     * 是否已提交
     */
    function isSubmitted() {
        return submitted;
    }
    
    // 返回公共接口
    return {
        init: init,
        submit: submit,
        reset: reset,
        getScore: getScore,
        isSubmitted: isSubmitted
    };
})();
