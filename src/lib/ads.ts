// AdSenseの設定。審査が通るまで ADSENSE_SLOTS は空のままにしておく。
// 空のあいだ AdSlot は何も描画しない(プレースホルダーの箱も出さない)。
export const ADSENSE_CLIENT = 'ca-pub-5840604825459691';

/**
 * 掲載位置ごとの広告ユニットID。
 * キーは各ページで <AdSlot label="..." /> に渡している文字列と一致させる。
 * 審査通過後、AdSense管理画面で発行したIDを入れる。
 *   例: 'トップページ広告': '1234567890',
 */
export const ADSENSE_SLOTS: Record<string, string> = {};
