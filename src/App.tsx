import {
  AppRoot,
  Panel,
  PanelHeader,
  SplitCol,
  SplitLayout,
  View,
  usePlatform,
} from '@vkontakte/vkui';
import { FC } from 'react';

import { Cart, Products } from 'src/components';

const App: FC = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== 'vkcom' && <PanelHeader delimiter='none' />}
      >
        <SplitCol>
          <View activePanel='main'>
            <Panel id='main'>
              <PanelHeader>VK Маркет</PanelHeader>
              <SplitLayout>
                <SplitCol width={'75%'} autoSpaced>
                  <Products />
                </SplitCol>
                <SplitCol width={'25%'} autoSpaced>
                  <Cart />
                </SplitCol>
              </SplitLayout>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
