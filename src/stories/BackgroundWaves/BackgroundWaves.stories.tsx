import { Meta, StoryObj } from "@storybook/react";
import { BackgroundWaves } from '../../components/BackgroundWaves/BackgroundWaves';
import styles from './BackgroundWaves.module.css';

export default {
    title: "templates/BackgroundWaves",
    component: BackgroundWaves ,
    argTypes: {},
} as Meta<typeof BackgroundWaves >;

type Story = StoryObj<typeof BackgroundWaves >;

const base: any = {
//   sampleTextProp: "Hello world!",
};

export const mockBackgroundWavesProps = {
    base,
};

// export const Base: Story = {
//     args: mockBackgroundWavesProps.base,
//     parameters: {},
//     play: () => {
//     },
// };

export const Primary: Story = {
    render: () =>{
        return(<>
            {/* <section className={styles.container}>
                <BackgroundWaves/>
            </section> */}
            <BackgroundWaves/>
        </>);
    } 
};


