// 获取模态窗口
const modal = document.getElementById("myModal");
const projectModal = document.getElementById("projectModal");

// 打开模态窗口
function showModal(projectId) {
    if (projectId) {
        const projectTitle = {
            project1: "植树造林",
            project2: "水资源保护",
            project3: "野生动物保护"
        };

        const projectDescription = {
            project1: "通过植树造林来恢复被破坏的森林，提高生态系统的碳汇功能。",
            project2: "保护并改善水质，建立生态友好的水源地，保障可持续的水资源利用。",
            project3: "保护濒危野生动物，维护生物多样性，促进生态平衡。"
        };

        document.getElementById("modalTitle").innerText = projectTitle[projectId];
        document.getElementById("modalDescription").innerText = projectDescription[projectId];
        projectModal.style.display = "block";
    } else {
        modal.style.display = "block";
    }
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
