import * as React from 'react';
import { Button } from './components/Button/Button';
import { Menu } from './components/Menu/Menu';
import { ToggleButton } from './components/ToggleButton/ToggleButton';
import { PicToggleButton } from './components/PicToggleButton/PicToggleButton';
import { PicButton } from './components/PicButton/PicButton';
import { Dropdown } from './components/Dropdown/Dropdown';
import { SelectPicture } from './components/SelectPicture/SelectPicture';
import { SelectButton } from './components/SelectButton/SelectButton';
import { Accordion } from './components/Accordion/Accordion';
import { SelectCard } from './components/SelectCard/SelectCard';
import { Submenu } from './components/Submenu/Submenu';
import { SubmenuIcon } from './components/SubmenuIcon/SubmenuIcon';
import { SpecialMenu } from './components/SpecialMenu/SpecialMenu';
import { TabMenu } from './components/TabMenu/TabMenu';
import { RangeSlider } from './components/RangeSlider/RangeSlider';
import { Carousel } from './components/Carousel/Carousel';
import { ImageDisplay } from './components/ImageDisplay/ImageDisplay';
import { LoadingScreen } from './components/LoadingScreen/LoadingScreen';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  private hooks = [];

  public registerHooks(hooks: any[]) {
    this.hooks = this.hooks.concat(hooks);
  }

  public deregisterHooks(hooks: any) {
    let index = this.hooks.findIndex(
      (e) => e.name === hooks.name && e.id === hooks.id
    );
    if (index >= 0) {
      this.hooks.splice(index, 1);
    }
  }

  public getHook(id: number, name: string) {
    let hook = this.hooks.find((e) => e.name === name && e.id === id);
    if (hook) {
      return hook;
    }
    return null;
  }

  render() {
    return (
      <div
        className="app"
        style={{ height: '100%', width: '100%', position: 'relative' }}
      >
        <Menu
          id={2}
          app={this}
          hideContentWhenClose={true}
          hiddenAtStart={false}
          openButtonImage=""
          closeButtonImage=""
          toggleOn={[]}
          toggleOff={[]}
          menuStyle="akngnren"
          menuHiddenStyle=""
          buttonStyle=""
          contentHolderStyle=""
          variants="vertical-left"
          hideMenuButton={false}
          content={[
            <LoadingScreen
              id={0}
              app={this}
              screenStyle={''}
              textStyle={''}
              loadingText={['loading', 'heyyy']}
              loadIntervalMS={2000}
              active={true}
              img={'hellooo'}
            />,
            <Button
              id={0}
              app={this}
              image={''}
              name={'button'}
              isActive={false}
              onClick={[]}
              buttonStyle={''}
              buttonActiveStyle={''}
              buttonImageStyle={''}
              buttonLabelStyle={''}
            />,
          ]}
          baseStyle={''}
          menuOverlayStyle={''}
          menuItemsHolderStyle={''}
        ></Menu>
      </div>
    );
  }
}
