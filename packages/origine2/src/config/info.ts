export interface Info {
  version: string,
  buildTime: string,
}

export const __INFO: Info = {
  version: '4.4.13',
  buildTime: '2024-04-01T05:55:11.048Z', // 编译时会通过 version-sync.js 自动更新
};
