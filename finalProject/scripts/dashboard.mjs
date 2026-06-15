import "./main.mjs";

const orderData = localStorage.getItem("freshFold-order");
function orderDataValidate() {

    if (orderData === null) {
        const emptyState = document.querySelector("#empty-state");
        const dashboardBanner = document.querySelector(".dashboard-banner");
        const dashboardGrid = document.querySelector(".dashboard-grid");

        emptyState.removeAttribute("hidden");
        dashboardBanner.style.display = "none";
        dashboardGrid.style.display = "none";
        return;
    }

    else {
        const order = JSON.parse(orderData);

        const customerName = document.querySelector("#customer-name");
        const bannerOrderId = document.querySelector("#banner-order-id");
        const summaryOrderId = document.querySelector("#summary-order-id");
        const summaryService = document.querySelector("#summary-service");
        const summaryQuantity = document.querySelector("#summary-quantity");
        const summaryDate = document.querySelector("#summary-date");
        const summaryAddress = document.querySelector("#summary-address");
        const summaryTotal = document.querySelector("#summary-total");

        customerName.textContent = order.name;
        bannerOrderId.textContent = order.id;
        summaryOrderId.textContent = order.id;

        summaryService.textContent = order.service;
        summaryQuantity.textContent = order.quantity;
        summaryDate.textContent = order.date;
        summaryAddress.textContent = order.address;

        // Calculate total cost
        const prices = {
            Washing: 1500,
            Ironing: 500,
            Drying: 800,
            Delivery: 1000
        };

        const price = prices[order.service];

        let total;
        if (order.service === "Delivery") {
            total = price;
        } else {
            total = price * Number(order.quantity);
        }
        summaryTotal.textContent = `₦${total.toLocaleString()}`;

        const stages = [
            { title: "Order Received",      icon: "📥", message: "Your order has been received and is being prepared for washing." },
            { title: "Washing in Progress", icon: "🫧", message: "Your laundry is currently being washed." },
            { title: "Drying Completed",    icon: "💨", message: "Your laundry has finished drying and is being folded." },
            { title: "Ready for Pickup",    icon: "📦", message: "Your laundry is ready for pickup or delivery." },
            { title: "Delivered",           icon: "🎉", message: "Your laundry has been delivered. Thank you for choosing FreshFold!" }
        ];

        function updateTracker(currentStage) {
            for (let i = 1; i <= 5; i++) {
                const stageEl = document.querySelector(`#stage-${i}`);
                const badge = stageEl.querySelector(".status-badge");
                if (i < currentStage) {
                    stageEl.classList.add("completed");
                    badge.textContent = "Completed";
                    badge.className = "status-badge badge-completed";
                }
                if (i === currentStage) {
                    stageEl.classList.add("active");
                    badge.textContent = "In progress";
                    badge.className = "status-badge badge-active";
                }
            }

            const percent = (currentStage / 5) * 100;
            const progressBar = document.querySelector("#progress-bar");
            const progressPercent = document.querySelector("#progress-percent");
            const bannerStatusText = document.querySelector("#banner-status-text");

            progressBar.style.width = `${percent}%`;
            progressPercent.textContent = `${percent}%`;
            bannerStatusText.textContent = stages[currentStage - 1].title;
        }

        function addNotification(stageNumber) {
            const notificationList = document.querySelector("#notification-list");
            const emptyMsg = notificationList.querySelector(".notif-empty");

            if (emptyMsg) {
                emptyMsg.remove();
            }
            const stage = stages[stageNumber - 1];
            const time = new Date().toLocaleTimeString();

            const item = document.createElement("li");
            item.className = "notification-item notif-active";

            item.innerHTML = `<span class="notif-icon">${stage.icon} </span>
            <div class="notif-text">
                <strong>${stage.title}</strong>
                <span>${time}</span>
            </div>`;

            notificationList.prepend(item);
        }

        const dialogIcon = document.querySelector("#dialog-stage-icon");
        const dialogMessage = document.querySelector("#dialog-stage-message");
        const stageDialog = document.querySelector("#stage-dialog");
        const closeDialog = document.querySelector("#close-dialog");

        function showStageDialog(stageNumber) {
            dialogIcon.textContent = stages[stageNumber - 1].icon;
            dialogMessage.textContent = stages[stageNumber - 1].message;
            stageDialog.showModal();
        }

        closeDialog.addEventListener("click", () => {
            stageDialog.close();
        });

        addNotification(order.stage);
        updateTracker(order.stage);

        const timer = setInterval(() => {
            if (order.stage < 5) {
                order.stage++;
                localStorage.setItem("freshFold-order", JSON.stringify(order));
                addNotification(order.stage);
                updateTracker(order.stage);
                showStageDialog(order.stage);
            }
            if (order.stage === 5) {
                clearInterval(timer);
            }
        }, 5000);
    }
}

orderDataValidate();
