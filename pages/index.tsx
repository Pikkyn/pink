import React, { useState } from 'react';
import {
  MenuOutlined,
  MenuFoldOutlined,
  SafetyOutlined,
  HomeOutlined,
  RocketOutlined,
  UnlockOutlined,
SafetyCertificateOutlined,
DollarOutlined,
ShoppingCartOutlined,
SolutionOutlined,
FileTextOutlined,
TwitterOutlined,
FacebookOutlined,
LineChartOutlined,
CrownOutlined,
SendOutlined,
} from '@ant-design/icons';
import { ConnectWallet, lightTheme } from '@thirdweb-dev/react';
import { Layout, Menu, Button, theme,Avatar,Typography,Card, Col, Row,Space} from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
// import styles from '../styles/Home.module.css';
const { Header, Sider, Footer, Content } = Layout;
const { Text } = Typography;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const headerStyle: React.CSSProperties = {
    color: 'black',
    lineHeight: '64px',
    width:'100%',
    height:'70px',
    backgroundColor: 'white',
    padding:'0px',
    position: 'sticky',
          top: 0,
          zIndex: 1,
          display: 'flex',
  };
  const contentStyle: React.CSSProperties = {
    minHeight: 120,
    color: 'black',
    backgroundColor: 'white',
    margin: '24px 16px 0',
    

  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
  };
  
  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'black',
    maxWidth: '168px',
    maxHeight:'51px',
    backgroundColor: 'white',
  };
  

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Launchpads', 'sub1', <RocketOutlined />, [
  getItem('Create launchpad', '3'),
  getItem('Create fair launch', '4'),
  getItem('Create dutch launch', '5'), 
  getItem('Create subscription', '6'),
  getItem('Create token', '7'),
  getItem('Launchpad list', '8'),
  ]),
  getItem('Private Sale', 'sub2', <SafetyOutlined />, [
    getItem('Create Private Sale', '9'),
    getItem('Private Sale list', '10'),
  ]),
  getItem('PinkLock', 'sub3', <UnlockOutlined />, [
    getItem('Create Lock', '11'),
    getItem('Token', '12'),
    getItem('Liquidity', '13'),
  ]),
  getItem('Airdrop', 'sub4', <UnlockOutlined />, [
    getItem('Create Airdrop', '14'),
    getItem('Airdrop List', '15'),
  ]),
  getItem('Staking', 'sub5', <UnlockOutlined />, [
    getItem('Create Staking', '16'),
    getItem('Staking List', '17'),
  ]),
  getItem('Buy Crypto Fiat', '18', <DollarOutlined />),
  getItem('Leaderboard', '19', <CrownOutlined />),
  getItem('<CrownOutlined />','20', <SafetyCertificateOutlined />),
  getItem('Multi-Sender', '21', <SendOutlined />),
  getItem('dexview.com', '22', <LineChartOutlined />),
  getItem('Pools Alert', '23'),
  getItem('KYC & Audit', '24',<SolutionOutlined />),
  getItem('Docs', '25',<FileTextOutlined />),
  getItem('Shop', '26',<ShoppingCartOutlined />),
  getItem('Twitter', '32',<TwitterOutlined />),
  getItem('Facebook', '33',<FacebookOutlined />),
];
  return (
   <Layout>
      <Sider 
      style={siderStyle}
      trigger={null} collapsible 
      collapsed={collapsed}
      theme="light"
     
        >
        <div className="demo-logo-vertical" 
       />
        <div style={{
          padding:'10px',
        }}><br/><br/><br/></div>
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        
      />
         
      </Sider>
      <Layout>
      <Header style={headerStyle}>
      <div>
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              alignItems: "left",
            }}
          />
          <Avatar src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png"/>
          &nbsp;
          <Text strong className='invisible md:visible'>PinkSale</Text>
          &nbsp;<span style={{
            float:'right',
            
          }}>
            <div className='invisible md:visible' style={{
              position:'absolute',
              right:'0px',
              marginRight:'20px',
              padding:'5px',
            }}
            >
              <span style={{
              // borderRadius:'30px',
              padding:'8px 8px',
              borderRadius:'20px !important'
            }}>
 <Text code className='rounded-md'  strong >< LineChartOutlined />dexview.com</Text>
            &nbsp;
          <Text code  strong ><LineChartOutlined />BSC MAINNET</Text>
            </span>
           
          &nbsp;
          <ConnectWallet
        theme={lightTheme({
          colors: {
            accentText: "#f95192",
            accentButtonBg: "#f95192",
            primaryText: "#f95192",
            primaryButtonBg: "#fdeaf1",
            accentButtonText: "#fdfcfd",
            primaryButtonText: "#f95192",
          },
        })}
        btnTitle={"Connect"}
        modalSize={"compact"}
      />
      
            </div>

            <div className='visible md:invisible'>

            <div style={{
              
            }}>
            
           
        

            <Avatar className='rounded-full' style={{
              padding:'2px',
              border:'1px solid #f3f3f4',
              backgroundColor:'#f3f3f4',
              alignItems:'center',


            }} src="https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png"/>
            {/* <span className='border-2 border-blue-300 rounded' style={{border:'1px solid #f3f3f4',
              backgroundColor:'#f3f3f4', padding:'1px', marginTop:'10px'}}>deview</span> */}
            <ConnectWallet 
            style={{
              marginLeft:'22px',
            }}
             theme={lightTheme({
              colors: {
              accentText: "#f95192",
              accentButtonBg: "#f95192",
              primaryText: "#f95192",
              primaryButtonBg: "#fdeaf1",
              accentButtonText: "#fdfcfd",
              primaryButtonText: "#f95192",
            },
        })}
        btnTitle={"Connect"}
        modalSize={"compact"}
      />
             </div>
              
            </div>
            
          
     </span>
      </div>
        </Header>
      
      <Content style={{
            margin: '24px 16px',
            paddingLeft: '50px',
            minHeight: 280,
            background: 'colorBgContainer',
            width:'100%',
            
          }}
        >
        <div className='text-pink invisible md:visible' style={{
          display:'flex',
          textAlign:'center',
          marginTop:'20px',
          // marginLeft:'-20px',
          marginRight:'-20px',
          paddingLeft: '100px',
          overflow:'auto',
          whiteSpace:'nowrap',
          color:'#f95192'

          }}>
      <LineChartOutlined 
      style={{
        color:"#f95192",
        marginRight:'30px',
        marginTop:'35px',
        fontSize:'small'
      }}/>&nbsp;Trending&nbsp;#1 BanterBucks&nbsp;&nbsp;#2 RAID&nbsp;&nbsp;&nbsp;&nbsp;#4 FANX&nbsp;&nbsp;#5 EAGLE&nbsp;&nbsp;#6 SAFELUNAR&nbsp;&nbsp;#7 WORLD&nbsp;&nbsp;#8 DXR&nbsp;&nbsp;#9 OMX&nbsp;&nbsp;#10 $MAGIC
      
      </div>
     <div className='visible md:invisible overflow-x-scroll' style={{
      display:'flex',
      textAlign:'center',
      overflow:'auto',
      whiteSpace:'nowrap',
      color:'#f95192',
      marginTop:'-45px',
      marginLeft:'-18px',
     }}>
     <LineChartOutlined 
      style={{
        color:"#f95192",
        marginRight:'50px'
      }}/>&nbsp;Trending&nbsp;#1 BanterBucks&nbsp;&nbsp;#2 zkEVM&nbsp;&nbsp;#3PMPY&nbsp;&nbsp;#4 HOOD&nbsp;&nbsp;#5 UNP&nbsp;&nbsp;#6 SAFELUNAR&nbsp;&nbsp;#7 zkEVM&nbsp;&nbsp;#8 zkEVM&nbsp;&nbsp;#9 zkEVM&nbsp;&nbsp;#10 zkEVM
      
      </div>



      <div className='' style={{
        textAlign:'center',
        padding:'50px',
        backgroundColor:'#faf9fa'
      }}>
        <h2 
        style={{
          fontSize:'38px',
          marginBottom:'0.5em',
          fontWeight:'600px',
          // lineHeight:'1.23px',
        }}>The Launchpad Protocol for Everyone!</h2>
        <p style={{
          fontSize:'20px',
          textAlign:'center'
        }}>PinkSale helps everyone to create their own tokens and token sales in few seconds.<br/>
            Tokens created on PinkSale will be verified and published on explorer websites.</p>
            <br/>
            <a className=' rounded ' style={{
              backgroundColor:'#fdeaf1',
              color:'#f95192',
              padding:'10px'
            }}><b>Create Now</b></a>
            &nbsp;&nbsp;&nbsp;&nbsp;<Button className='invisible md:visible'  type="primary" size="large" style={{
              backgroundColor:'#fdeaf1',
              color:'#f95192'
            }}><b>Learn More</b></Button><br/><br/><br/>
          
  <span className='grid lg:grid-cols-4 gap-5'>
        <span className='mx-0 md:ml-20 'style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'}}>
        <span  title="$387.4M" style={{}}>
        <span className='font-bold text-lg'>$387.4M</span> <br/>
           Total Liquidity Raised
          </span>
        </span>
        <span className='max-w-md' style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'}}>
        <span title="20513" style={{  }}>
        <span className='font-bold text-lg'>20513</span> <br/>
          Total Projects
          </span>
        </span>
        <span className='' style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'}}>
        <span title="2.3M"  style={{  }}>
          <span className='font-bold text-lg'>2.3M</span> <br/>
          Total Participants
          </span>
        </span>
        <span className='' style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'}}>
        <span title="$214.9M" style={{  }}>
        <span className='font-bold text-lg'>$214.9MM</span> <br/>
          Total Values Locked
          </span>
        </span>  
  </span>
  

  <br/>
  
  <h2 className='{styles.heading}'>A Suite of Tools for Token Sales.</h2>
         <p style={{
          fontSize:'20px',
          textAlign:'center'
        }}>A suite of tools were built to help you create your own tokens and launchpads in a fast, <br/>simple and cheap way, with no prior code knowledge required and 100% decentralized!</p><br/><br/><br/>

      <span className='grid lg:grid-cols-4 gap-10'>
          <span className='mx-0 md:ml-20' style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'
            }} >
          <span  style={{
            
          }} >
              <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src="https://www.pinkswap.finance/pinkmoon.png"></Avatar>
        <h2 className='font-bold text-lg'>Standard</h2>
            <p style={{
              fontSize:'20px',
              textAlign:'center'
            }}>Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.</p>
              </span>
          </span>
            <span style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'
            }}>
            <span>
              <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src="https://www.pinkswap.finance/pinkmoon.png"></Avatar>
        <h2 className='font-bold text-lg'>Deflationary</h2>
            <p style={{
              fontSize:'20px',
              textAlign:'center'
            }}>Generate deflationary tokens with tax and/or charity functions.</p>
              </span>
            </span>
              <span style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'
            }}>
                <span  >
                      <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                src="https://www.pinkswap.finance/pinkmoon.png"></Avatar>
                <h2 className='font-bold text-lg'>Customization</h2>
                    <p style={{
                      fontSize:'20px',
                      textAlign:'center'
                    }}>Create a token sale for your own custom token easily.</p>

                 </span>
                </span>  
                    <span style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)', padding:'40px'
            }}>
                          <span >
                          <Avatar
                    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                    src="https://www.pinkswap.finance/pinkmoon.png"></Avatar>
                    <h2 className='font-bold text-lg'>Launchpad</h2>
                        <p style={{
                          fontSize:'20px',
                          textAlign:'center'
                        }}>Use the token you mint to create a launchpad with just a few clicks</p>

                          </span>
                    </span>
      </span>
    
      </div>

      <Footer className='flex justify-center' style={{
        backgroundColor:'#faf9fa'
      }}>
        <div className="container max-w-xl w-screen mx-auto px-15 "style={{
          maxWidth: '70rem'
        }}>
        <div className="copyright">
        <p className="has-text-centered">Disclaimer: PinkSale will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via 
        <a href="#" style={{
          color:'#f95192'
        }}>Binance Academy</a>.</p></div>
        </div>
     
      </Footer>
        </Content>
        
      
      
      </Layout>
    </Layout>
  );

  

};

export default Home;