/**
 * 抽象工厂
 */

interface IButton {
  paint(): void
}

interface ICheckbox {
  paint(): void
}

interface IGUIFactory {
  createButton(): IButton
  createCheckbox(): ICheckbox
}

class WinFactory implements IGUIFactory {
  createButton(): IButton {
    return new WinButton()
  }

  createCheckbox(): ICheckbox {
    return new WinCheckbox()
  }
}

class WinButton implements IButton {
  paint() {
    console.log('paint')
  }
}

class WinCheckbox implements ICheckbox {
  paint() {
    console.log('paint')
  }
}
