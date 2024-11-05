// 获取模态窗口
const modal = document.getElementById("myModal");
const projectModal = document.getElementById("projectModal");

// 打开模态窗口
function showModal(project) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const moreInfoLink = document.getElementById("moreInfoLink");

    if (project === 'project1') {
        title.textContent = "蚂蚁森林";
        description.textContent = "蚂蚁森林是一项旨在带动公众低碳减排的公益项目，每个人的低碳行为在蚂蚁森林里可计为“绿色能量”。“绿色能量”积累到一定程度，就可以用手机申请在生态亟需修复的地区种下一棵真树，或者在生物多样性亟需保护的地区“认领”保护权益蚂蚁森林在各地的生态修复项目，是由蚂蚁集团向公益机构捐赠资金，由公益机构组织种植养护等具体工作，并由当地林业部门进行业务监管，所有项目都有对应的捐赠协议、验收报告.";
        moreInfoLink.href = "https://www.antgroup.com/esg/lowcarbon";
    } else if (project === 'project2') {
        title.textContent = "地球一小时";
        description.textContent = " 地球一小时（Earth Hour）是世界自然基金会（WWF）应对全球气候变化所提出的一项全球性节能活动，提倡于每年三月最后一个星期六的当地时间晚上20:30（2024年地球一小时时间为3月30日晚上20:30），家庭及商界用户关上不必要的电灯及耗电产品一小时，以此来表明他们对应对气候变化行动的支持。 [1]过量二氧化碳排放导致的气候变化已经极大地威胁到地球上人类的生存。所以公众只有通过改变全球民众对于二氧化碳排放的态度，才能减轻这一威胁对世界造成的影响。";
        moreInfoLink.href = "https://m.thepaper.cn/baijiahao_17315598#:~:text=%E5%9C%B0%E7%90%83%E4%B8%80%E5%B0%8F%E6%97%B6%EF%BC%88Ea,%E5%8F%98%E6%9A%96%E8%A1%8C%E5%8A%A8%E7%9A%84%E6%94%AF%E6%8C%81%E3%80%82";
    } else if (project === 'project3') {
        title.textContent = "低碳出行";
        description.textContent = "出行方式是指居民出行所采用的方法或使用的交通工具。居民出行重要特征之一。有单一出行方式和复合出行方式。单一出行方式是一次出行只用一种出行方式，或虽然使用了多种方式，但以其中的一种主要方式为代表。复合出行方式是列出一次出行中所使用的所有方式，但步行同其他方式合用时，则不再把步行方式列出。按单一出行方式划分居民出行数时，其各种方式的出行数之和等于出行总数。按复合方式统计各种方式的出行数时，其总数大于居民出行总数，但可以更确切地表示各种交通方式使用的比重。";
        moreInfoLink.href = "https://baike.baidu.com/item/%E4%BD%8E%E7%A2%B3%E5%87%BA%E8%A1%8C/4087391";
    }

    modal.style.display = "block";
}



// 关闭模态窗口
function closeModal() {
    modal.style.display = "none";
    projectModal.style.display = "none";
}

// 点击窗口外部关闭模态窗口
window.onclick = function(event) {
    if (event.target === modal || event.target === projectModal) {
        closeModal();
    }
}

// 页面加载完成后的初始化操作
window.onload = function() {
    // 可以在这里进行初始化设置，例如加载数据等
};


function showCompletionMessage() {
    const totalQuestions = window.questions.length;
    const accuracy = (score / totalQuestions) * 100;

    // 根据正确率确定成就称号
    let achievement = '';
    if (accuracy >= 90) {
        achievement = '生态文明大师';
    } else if (accuracy >= 70) {
        achievement = '环保卫士';
    } else if (accuracy >= 50) {
        achievement = '生态小能手';
    } else {
        achievement = '环保新手';
    }

    // 显示成就信息
    const completionModal = document.getElementById("completionModal");
    const completionMessage = document.getElementById("completionMessage");
    completionMessage.innerHTML = `
        您答对了 ${score} 个问题，共 ${totalQuestions} 个问题。<br>
        正确率为 ${accuracy.toFixed(2)}%。<br>
        恭喜您获得<span class="highlight">「${achievement}」</span>称号！
    `;

    // 随机选择一个环保小贴士或名言
    const ecoQuotes = [
        "“地球不属于我们，我们属于地球。” - 克雷尔 • 波金",
        "“爱护环境，就是爱护未来。”",
        "“我们借用地球的资源，而不是拥有它。”",
        "“珍惜自然资源，共享和谐生态。”"
    ];
    const randomQuote = ecoQuotes[Math.floor(Math.random() * ecoQuotes.length)];
    document.querySelector('.eco-quote').textContent = randomQuote;

    completionModal.style.display = "block";

    // 重置变量
    currentQuestionIndex = 0;
    score = 0;

    // 清除进度图标
    document.getElementById('progress-container').innerHTML = '';
}

// 关闭成就模态窗口
function closeCompletionModal() {
    const completionModal = document.getElementById("completionModal");
    completionModal.style.display = "none";
    // 重新加载第一个问题
    displayQuestion(currentQuestionIndex);
}

function openContactModal() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "block";
}

function closeContactModal() {
    const contactModal = document.getElementById("contactModal");
    contactModal.style.display = "none";
}

// 点击窗口外部关闭模态窗口
window.onclick = function(event) {
    const contactModal = document.getElementById("contactModal");
    if (event.target === contactModal) {
        closeContactModal();
    }
}