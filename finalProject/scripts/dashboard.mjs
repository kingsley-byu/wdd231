import "./main.mjs";

const orderData = localStorage.getItem("freshfold-order");
function orderDataValidate() {

    if (orderData === null){
        const emptyState = document.querySelector("#empty-state");
        const dashboardBanner = document.querySelector(".dashboard-banner");
        const dashboardGrid = document.querySelector(".dashboard-grid");
    
        emptyState.removeAttribute("hidden");
        dashboardBanner.style.display = "none";
        dashboardGrid.style.display = "none";
        return;
    }
    
    else {
        const order = JSON.parse(orderData)

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

        //Calculate total cost
        const prices = {
            Washing: 1500,
            Ironing: 500,
            Drying: 800,
            Delivery: 1000
        };
        
        const price = prices[order.service];

        let total;
        if (order.service ==="Delivery") {
            total = price;
        }
        else{
            total = price * Number(order.quantity);
        }
        summaryTotal.textContent = `₦${total.toLocaleString()}`; 
        
        const stages = [
        { title: "Order Received",      icon: "📥" },
        { title: "Washing in Progress", icon: "🫧" },
        { title: "Drying Completed",    icon: "💨" },
        { title: "Ready for Pickup",    icon: "📦" },
        { title: "Delivered",           icon: "🎉" }
        ];


        function updateTracker(currentStage) {
            for (let i = 1; i <= 5; i++) {
               const stageE1 = document.querySelector(`#stage-${i}`);
               const badge = stageE1.querySelector(".status-badge")
               if (i < currentStage){
                stageE1.classList.add("completed");

                badge.textContent = "Completed";
                badge.className = "status-badge badge-completed";
               }

               if (i === currentStage) {
                stageE1.classList.add("active");
                badge.textContent = "In progress";
                badge.className = "status-badge badge-active";
               }

               if (i > currentStage) {
               }
            }

            const percent = (currentStage / 5) * 100;
            const progressBar = document.querySelector("#progress-bar");
            const progressPercent = document.querySelector("#progress-percent");
            const bannerStatusText = document.querySelector("#banner-status-text");

            progressBar.style.width = `${percent}%`;
            progressPercent.textContent = `${percent}%`;
            bannerStatusText.textContent = stages[currentStage -1].title;
        }

           updateTracker(order.stage);
    }

}

orderDataValidate();
