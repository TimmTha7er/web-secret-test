const getOnlyNumbers = (string: string): string => {
  return string.replace(/[^\d]/g, '')
}

export { getOnlyNumbers }
