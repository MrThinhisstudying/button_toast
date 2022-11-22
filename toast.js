function toast({
    title = '',
    message = '',
    type = 'success',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            warn: 'fa-sharp fa-solid fa-circle-exclamation',
            danger: 'fa-sharp fa-solid fa-circle-exclamation'
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `animation: slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards;`
        toast.innerHTML = ` 
        <div class = "toast__icon">
            <i class = "${icon}"></i></div>
            <div class = "toast__body">
            <h3 class = "toast__title" > ${title} </h3> 
            <p class = "toast__msg" > ${message} </p></div> 
            <div class = "toast__close" >
                <i class = "fa-solid fa-xmark"></i>
            </div>`;
        main.appendChild(toast);

        //auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 500);

        //remove toast when clicked
        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        function showSuccessToast() {
            toast({
                title: 'Thành Công',
                message: "Bạn đã đăng ký thành công tài khoản",
                type: 'success',
                duration: 5000
            });
        }

        function showWarnToast() {
            toast({
                title: 'Cảnh báo',
                message: "Bạn chưa điền đủ thông tin",
                type: 'warn',
                duration: 3000
            });
        }

        function showDangerToast() {
            toast({
                title: 'Thất bại',
                message: "Bạn đã đăng ký thất bại",
                type: 'danger',
                duration: 3000
            });
        }
    }
}