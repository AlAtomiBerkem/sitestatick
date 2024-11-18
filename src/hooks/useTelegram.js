const tg = window.telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close()
    }
    
    const onToggleButton = () => {
        if(tg.mainButton.isVisible) {
            tg.mainButton.hide();
        } else {
            tg.mainButton.show()
        }
    }
    
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        onToggleButton,
    }
}