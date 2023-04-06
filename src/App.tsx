import * as React from 'react';
import { Button } from './components/Button/Button';
import { Menu } from './components/Menu/Menu';
import { ToggleButton } from './components/ToggleButton/ToggleButton';
import { PicToggleButton } from './components/PicToggleButton/PicToggleButton';
import { PicButton } from './components/PicButton/PicButton';
import { Dropdown } from './components/Dropdown/Dropdown';
import { SelectPicture } from './components/SelectPicture/SelectPicture';
import { SelectButton } from './components/SelectButton/SelectButton';
import { Submenu } from './components/Submenu/Submenu';
import { SelectCard } from './components/SelectCard/SelectCard';

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
            <Button
              id={1}
              app={this}
              name="Button"
              onClick={[]}
              buttonStyle=""
            />,
            <ToggleButton
              id={1}
              app={this}
              offText="off"
              onText="on"
              turnOFF={[]}
              turnON={[]}
              buttonStyle=""
            />,
            <PicToggleButton
              id={1}
              app={this}
              turnOFF={[]}
              turnON={[]}
              offImg="http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"
              onImg="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg"
              buttonStyle=""
            />,
            <PicButton
              id={1}
              app={this}
              img="https://hips.hearstapps.com/hmg-prod/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
              onClick={[]}
              buttonStyle=""
            />,
            <Dropdown
              label="dropdown label"
              hideLabel={false}
              dropdownStyle=""
              holderStyle=""
              labelStyle=""
              selectionObject={{
                displayValue: {
                  name: 'displayValue',
                },
                selection: {
                  list: [{ displayValue: 'item1' }, { displayValue: 'item2' }],
                  onChange: (index: number) => {},
                  func: '',
                  currentIndex: 0,
                },
              }}
              app={this}
              id={12}
            />,
            <SelectPicture
              app={this}
              customPictureDisplay={[]}
              hideLabel={false}
              holderStyle=""
              itemStyle=""
              label="select pic"
              labelStyle=""
              id={12}
              selectionObject={{
                displayValue: { img: 'image' },
                selection: {
                  currentIndex: 0,
                  onChange(index) {},
                  func: 'function',
                  list: [
                    {
                      name: 'firstItem',
                      image:
                        'http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg',
                    },
                    {
                      name: 'secondItem',
                      image:
                        'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg',
                    },
                    {
                      name: '3rdItem',
                      image:
                        'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg',
                    },
                  ],
                },
              }}
            />,
            <SelectButton
              app={this}
              id={669}
              hideLabel={false}
              holderStyle=""
              itemStyle=""
              label="select button"
              labelStyle=""
              selectionObject={{
                displayValue: { name: 'name' },
                selection: {
                  currentIndex: 0,
                  func: '',
                  onChange(index) {},
                  list: [
                    {
                      name: 'firstBtn',
                    },
                    {
                      name: 'secondBtn',
                    },
                    {
                      name: '3rdBtn',
                    },
                  ],
                },
              }}
            />,
            <SelectCard
              app={this}
              id={66}
              hideLabel={false}
              holderStyle=""
              itemStyle=""
              labelStyle=""
              label="slectcard"
              selectionObject={{
                displayValue: { img: 'image', caption: '' },
                selection: {
                  currentIndex: 0,
                  func: '',
                  onChange(index) {},
                  list: [
                    {
                      caption: 'item1',
                      image:
                        'https://www.werbezeichen.de/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fwerbezeichen-product-import%2Fproduct_images%2Fjx%2F53-00-51_Lisboa.jpg&w=640&q=75',
                    },
                    {
                      caption: 'iterm2',
                      image:
                        'https://www.werbezeichen.de/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fwerbezeichen-product-import%2Fproduct_images%2Fjx%2F53-00-51_Lisboa.jpg&w=640&q=75',
                    },
                  ],
                },
              }}
              customCardDisplay={[
                {
                  name: 'image',
                  caption: 'custom',
                  image: 'rjhtijojijoj',
                },
              ]}
            />,
            <Submenu
              app={this}
              id={1}
              content={
                [
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                  // <Button
                  //   id={1}
                  //   app={this}
                  //   name="Button"
                  //   onClick={[]}
                  //   buttonStyle=""
                  // />,
                ]
              }
              headerStyle=""
              mainStyle=""
              openAtStart={true}
              titleStyle=""
              title="this is header"
              contentStyle=""
            />,
          ]}
        ></Menu>
      </div>
    );
  }
}
