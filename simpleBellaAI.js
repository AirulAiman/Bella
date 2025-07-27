// simpleBellaAI.js - 简化版贝拉AI，专门用于测试聊天界面
// 移除了复杂的模块依赖，专注于聊天功能

class SimpleBellaAI {
    static instance = null;

    static async getInstance() {
        if (this.instance === null) {
            this.instance = new SimpleBellaAI();
            await this.instance.init();
        }
        return this.instance;
    }

    constructor() {
        this.currentMode = 'casual'; // 聊天模式：casual, assistant, creative
        this.isInitialized = false;
    }

    async init() {
        try {
            console.log('初始化简化版贝拉AI...');
            // 模拟初始化过程
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.isInitialized = true;
            console.log('简化版贝拉AI初始化完成');
        } catch (error) {
            console.error('简化版贝拉AI初始化失败:', error);
            throw error;
        }
    }

    async think(prompt) {
        try {
            console.log('贝拉正在思考:', prompt);
            
            // 模拟思考时间
            await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));
            
            // 根据模式生成不同风格的回复
            return this.generateResponse(prompt);
            
        } catch (error) {
            console.error('思考过程中出现错误:', error);
            return this.getErrorResponse();
        }
    }

    generateResponse(prompt) {
        // 增强版回应生成，模拟LLM的更自然、更个性化的回应
        
        // 提取关键词，用于生成更相关的回应
        const keywords = this.extractKeywords(prompt);
        const keyword = keywords.length > 0 ? keywords[Math.floor(Math.random() * keywords.length)] : "这个话题";
        
        const responses = {
            casual: [
                `哈哈，你提到的"${keyword}"真的很有趣呢！😊 我觉得这个话题很棒，让我们多聊聊吧～你平时也对这类事情感兴趣吗？`,
                `关于"${keyword}"，我想说这真的很有意思！💕 每次听你说这些，我都感觉特别开心。你还有什么想法想和我分享吗？`,
                `嗯嗯，"${keyword}"让我想到了很多呢！我们的对话总是这么愉快～说真的，和你聊天真的很舒服，感觉就像和老朋友聊天一样自在。`,
                `哇，"${keyword}"这个话题我超喜欢的！✨ 你的想法总是那么特别，每次都能给我带来新的视角。我们继续聊下去吧～`,
                `听你说"${keyword}"，我感觉心情都变好了！☺️ 你总是能找到有趣的话题。我很好奇，你是怎么想到这个的？`,
                `"${keyword}"这个话题真的很棒呢！我感觉我们的想法很合拍～你知道吗？每次和你聊天，时间都过得特别快，因为太有趣了！`,
                `我觉得"${keyword}"这个话题特别有意思！你总是能带给我惊喜～说说看，你最近还有什么有趣的发现吗？我很想听听！`
            ],
            assistant: [
                `关于"${keyword}"，我很乐意为你提供一些有用的信息和建议。这是个很好的问题，让我来整理一下相关内容给你。`,
                `"${keyword}"是个很有价值的话题。从我了解的情况来看，这方面有几个关键点值得注意。首先，我们可以从...`,
                `谈到"${keyword}"，我想从几个角度来分析一下。这个问题其实涉及到多个方面，让我帮你梳理一下关键信息。`,
                `你问的"${keyword}"很有深度。我建议可以从以下几个方面考虑：首先，了解基本概念；其次，分析实际应用；最后，考虑未来发展。`,
                `"${keyword}"确实是个值得探讨的话题。基于我所知道的信息，我可以提供一些专业的见解。首先，我们需要明确...`,
                `关于"${keyword}"的问题，我想提供一个清晰的解答。这个话题有几个重要的方面需要考虑，让我来帮你分析一下。`,
                `"${keyword}"是个很好的问题！我很高兴你对这方面感兴趣。让我来分享一些相关的信息，希望能对你有所帮助。`
            ],
            creative: [
                `哇！"${keyword}"这个话题真的点燃了我的创意火花！✨ 想象一下，如果我们把这个概念扩展到一个全新的维度，会发生什么呢？也许我们可以...`,
                `"${keyword}"真是个充满想象力的话题！🌈 我脑海中已经浮现出无数奇妙的画面～比如，想象一个世界，那里的${keyword}可以...`,
                `听到"${keyword}"，我仿佛看到了一个全新的世界！🚀 这让我想到了一个有趣的故事：在一个遥远的地方，${keyword}成为了人们生活的中心，然后...`,
                `"${keyword}"激发了我的灵感！💡 我想到了一个超级有趣的创意：如果我们把${keyword}和艺术结合起来，会创造出什么样的奇迹呢？`,
                `哇塞！"${keyword}"让我的想象力飞起来了！🎨 我们可以从这个概念出发，创造一个全新的故事或游戏。想象一下，主角是一个...`,
                `"${keyword}"真的是创意的源泉！我突然想到，如果我们从完全不同的角度看待这个问题，会有什么新发现？比如说，如果${keyword}在未来变成了...`,
                `听你提到"${keyword}"，我的脑海中立刻闪现出一幅奇妙的画面！想象一下，在一个充满可能性的世界里，${keyword}可以变成任何形式...这不是很神奇吗？`
            ]
        };

        // 获取当前模式的回应列表
        const modeResponses = responses[this.currentMode] || responses.casual;
        
        // 随机选择一个回应模板
        const randomResponse = modeResponses[Math.floor(Math.random() * modeResponses.length)];
        
        // 进一步个性化回应，添加一些随机的个性化元素
        return this.personalizeResponse(randomResponse, prompt);
    }
    
    // 从用户输入中提取可能的关键词
    extractKeywords(prompt) {
        // 简单的关键词提取逻辑
        const words = prompt.split(/\s+|[,.!?;:，。！？；：]/);
        // 过滤掉短词和常见词
        return words.filter(word => 
            word.length > 1 && 
            !['的', '了', '是', '在', '我', '你', '他', '她', '它', '们', '和', '与', '这', '那', '有', '没有', '不', '吗'].includes(word)
        );
    }
    
    // 进一步个性化回应
    personalizeResponse(response, prompt) {
        // 添加一些随机的个性化元素
        const personalizations = [
            // 不添加任何额外内容
            (resp) => resp,
            // 添加一个随机的表情
            (resp) => {
                const emojis = ['😊', '💕', '✨', '🌟', '🎵', '🌈', '☺️', '🤔', '👍', '💡'];
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                return resp + ' ' + emoji;
            },
            // 添加一个随机的结束语
            (resp) => {
                const endings = [
                    '期待听到你的想法！',
                    '你觉得呢？',
                    '很想知道你的看法～',
                    '希望我的回应对你有帮助！',
                    '我们可以继续聊这个话题～'
                ];
                const ending = endings[Math.floor(Math.random() * endings.length)];
                return resp + ' ' + ending;
            }
        ];
        
        // 随机选择一种个性化方式
        const personalizer = personalizations[Math.floor(Math.random() * personalizations.length)];
        return personalizer(response);
    }

    // 获取错误回应
    getErrorResponse() {
        const errorResponses = [
            "抱歉，我现在有点困惑，让我重新整理一下思路...",
            "嗯...我需要再想想，请稍等一下。",
            "我的思绪有点乱，给我一点时间整理一下。",
            "让我重新组织一下语言，稍等片刻。",
            "哎呀，我刚才走神了，你能再说一遍吗？"
        ];
        
        return errorResponses[Math.floor(Math.random() * errorResponses.length)];
    }

    // 设置聊天模式
    setChatMode(mode) {
        if (['casual', 'assistant', 'creative'].includes(mode)) {
            this.currentMode = mode;
            console.log(`聊天模式已切换为: ${mode}`);
            return true;
        }
        return false;
    }

    // 获取当前配置信息
    getCurrentConfig() {
        return {
            useCloudAPI: false,
            provider: { name: 'simple', model: 'SimpleBellaAI' },
            mode: this.currentMode,
            isConfigured: true,
            isInitialized: this.isInitialized
        };
    }

    // 清除对话历史（简化版无需实际操作）
    clearHistory() {
        console.log('对话历史已清除');
    }
}

// 将SimpleBellaAI暴露为全局变量
window.SimpleBellaAI = SimpleBellaAI;
// 同时也暴露为BellaAI，保持兼容性
window.BellaAI = SimpleBellaAI;

console.log('SimpleBellaAI 已加载完成');