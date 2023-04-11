import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows // 直接给shadows 就是背景 其他参数'basic', 'percentage', 'soft', 'variance'
      camera={{ position: [0, 0, 0], fov: 26 }}
      // fov是距离 大就远 小就近
      // position第三个参数配合fov 是动画效果 拉镜头 0-26就是从0拉距离到26
      // position: [0, 0, 50], fov: 26     50-26就是从50拉距离到26
      gl={{ preserveDrawingBuffer: true }} //这个暂时不知道
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight
        intensity={0.5}
        // color='#41D1FF'
      />
      {/* 这个光是3js的  color='#41D1FF'可给color  intensity - (参数可选)光照的强度 */}

      <Environment preset='city' />
      {/* 这个光是drei的 环境光 用city就可以 否则太暗  */}

      <CameraRig>
        <Backdrop />
        {/* Backdrop 上面的shadows才管用  */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
