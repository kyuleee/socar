import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';


function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 bgimg={'bgimg1'} title='MOBILITY TECH' subtit={'기술과 데이터로 \n 이동의 문제를 해결합니다'} />
      <Section2 bgimg={'bgimg2'} title='SOCAR UNIVERSE' subtit={'디지털 플랫폼을 중심으로 \n 새로운 모빌리티 생태계를 만듭니다'}/>
      <Section2 bgimg={'bgimg3'} title='CAREERS' subtit={'쏘카다운 방식으로 \n 모빌리티를 혁신합니다'}/>
      <Footer />
    </div>
  );
}

export default App;
