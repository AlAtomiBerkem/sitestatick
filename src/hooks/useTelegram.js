const tg = window.telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close()
    }
    
    return {
    
    }
}