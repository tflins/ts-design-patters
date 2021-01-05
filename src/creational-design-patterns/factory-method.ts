/**
 * 工厂方法模式
 * 
 * 工厂方法建议使用特殊的工厂方法代替对于对象构造函数的直接调用，即直接使用 new 操作符创建
 * 工厂方法返回的对象通常称为产品
 */

/**
 * 代码演示
 * 
 * 使用工厂方法开发跨平台组件
 */

interface IButton {
  render(): void
  onClick(): void
}

/**
 * 创建基类，具体的工厂基于这个基类创建
 */
abstract class Dialog {

  // 其他工厂必须要实现的工厂函数，子类必须实现
  abstract createButton(): IButton

  render(): void {
    const button: IButton = this.createButton()

    button.onClick()
    button.render()
  }
}

class WindowsDialog extends Dialog {
  createButton(): IButton {
    return new WindowsButton
  }
}

class WebDialog extends Dialog {
  createButton(): IButton {
    return new HtmlButton
  }
}

class IOSDialog extends Dialog {
  createButton(): IButton {
    return new IOSButton
  }
}

class WindowsButton implements IButton {
  render() {
    console.log('start render windows button')
  }

  onClick() {
    console.log('on click windows button')
  }
}

class HtmlButton implements IButton {
  render() {
    console.log('start render html button')
  }

  onClick() {
    console.log('on click html button')
  }
}

class IOSButton implements IButton {
  render() {}

  onClick() {}
}

class Application {
  private dialog: Dialog

  private initialize() {

    const config = {
      os: 'windows'
    }

    if (config.os === 'web') {
      this.dialog = new WebDialog()
    } else {
      this.dialog = new WindowsDialog()
    }
  }

  main() {
    this.initialize()
    this.dialog.render()
  }
}

new Application().main()
