class ImageDTO {
  desktop
  tablet
  mobile

  constructor(model) {
    this.desktop = {
      x1: model.desktop.x1,
      x2: model.desktop.x2,
      webpX1: model.desktop.webp_x1,
      webpX2: model.desktop.webp_x2,
    }
    this.tablet = {
      x1: model.tablet.x1,
      x2: model.tablet.x2,
      webpX1: model.tablet.webp_x1,
      webpX2: model.tablet.webp_x2,
    }
    this.mobile = {
      x1: model.mobile.x1,
      x2: model.mobile.x2,
      webpX1: model.mobile.webp_x1,
      webpX2: model.mobile.webp_x2,
    }

    return { ...this }
  }
}

export { ImageDTO }
