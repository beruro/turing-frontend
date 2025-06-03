/**
 * App-specific theme configurations for the create button
 * 为不同app预定义的创建按钮主题配置
 */

export const APP_THEMES = {
    // DreamLux app theme (purple)
    dreamlux: {
        button_create_color: '#7662EC', // DreamLux purple
    },

    // Groovo app theme (orange)
    groovo: {
        button_create_color: '#FF6B35', // Groovo orange
    },

    // Fluenty app theme (teal)
    fluenty: {
        button_create_color: '#00D4AA', // Fluenty teal
    },
} as const

export type AppThemeKey = keyof typeof APP_THEMES

/**
 * Get theme configuration for a specific app
 * 获取特定app的主题配置
 * 
 * @param app - The app name (dreamlux, groovo, or fluenty)
 * @returns Theme configuration object
 */
export const getAppTheme = (app: AppThemeKey) => {
    return APP_THEMES[app]
}

/**
 * Create a theme with app-specific create button color
 * 创建包含app特定创建按钮颜色的主题
 * 
 * @param app - The app name
 * @param additionalTheme - Additional theme properties
 * @returns Combined theme object
 */
export const createAppTheme = (
    app: AppThemeKey,
    additionalTheme: Record<string, any> = {}
) => {
    return {
        ...APP_THEMES[app],
        ...additionalTheme,
    }
} 