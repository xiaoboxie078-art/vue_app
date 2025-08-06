let configCache = null

export async function getConfig() {
  if (configCache) return configCache
  const res = await fetch('/config.json')
  configCache = await res.json()
  return configCache
}