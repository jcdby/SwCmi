import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Thumbnail from 'react-bootstrap/lib/Thumbnail'
import Button from 'react-bootstrap/lib/Button'
import Image from 'react-bootstrap/lib/Image'



export default class CellIntroView extends React.Component {
  render() {
    return (<Grid>
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image style={{ width: 150, height: 150 }} src="/assets/davidcell.jpg" circle></Image>
            </div>
            <h3>다윗셀</h3>
            <p>
              젊은 청년들이 함께 모여 삶 나눔과 말씀 나눔, 기도를 통해 하나님과 서로에 대한 친밀감을 세워나가는 공동체 모임
            </p>
            <p>“너희는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라
              범사에 그를 인정하라 그리하면 네 길을 지도하시리라”</p>
            <p>- 잠언 3: 5~6 -</p>

          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image style={{ width: 150, height: 150 }} src="/assets/marycell.png" circle></Image>
            </div>
            <h3>마리아셀</h3>
            <p>
              40세 이상의 자매성도의 영적인 교제와 나눔을 통해 친밀감을 고취시키며 하나님의 가르침을 실천하고 이웃을 섬기는 공동체 부서
            </p>
            <p>“복 있는 사람은 악인들의 꾀를 따르지 아니하며 죄인들의 길에 서지 아니하며 오만한 자들의 자리에 앉지 아니하고 오직 여호와의 율법을 주야로 묵상하는도다.”</p>

            <p>- 시편 1: 1-2 -</p>


          </Thumbnail>
        </Col>
        <Col xs={6} md={4}>
          <Thumbnail>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image style={{ width: 150, height: 150 }} src="/assets/로뎀.png" circle></Image>
            </div>
            <h3>로뎀셀</h3>
            <p>
              30·40대 결혼한 자매들의 모임으로 말씀의 은혜를 나누고 아내와 엄마로서의 고충을 서로 격려해 주며 함께 기도하고 성장해 가는 공동체 모임
            </p>
            <p>“ 복이 있는 사람 - 시냇가의 심은 나무 ”</p>
            <p>- 시편 1: 1~3 -</p>
          </Thumbnail>
        </Col>
      </Row>
      <Row>

      </Row>
    </Grid>)
  }
}
