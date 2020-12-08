import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Modal,
  Segment,
  Visibility,
  Button,
  Card
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: '800px',
}

const LeftImage = () => (
  <Image
    floated='left'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='/images/wireframe/square-image.png'
    style={{ margin: '2em -4em 2em 2em' }}
  />
)
function wrongModal() {
    const [open, setOpen] = React.useState(false)
  
    return (
      <Modal
        basic
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size='small'
        trigger={<Button>Basic Modal</Button>}
      >
        <Header icon>
          <Icon name='archive' />
          Archive Old Messages
        </Header>
        <Modal.Content>
          <p>
            Sorry, that answer is incorrect... try again!
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={() => setOpen(false)}>
            <Icon name='checkmark' /> Ok!
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export default class tutorial extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state

    if (!overlayRect) {
      this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
    }
  }

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state

    return (
      <html>
<head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
      </head>
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Container text style={{ marginTop: '2em', color: 'white' }}>
          <Header as='h1'>Pop Quiz! Do you know enough to start campaigning??</Header>
          <Image src='../../quiz.jpg' />
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Link to='/tutorial'><Menu.Item as='a'>Background</Menu.Item></Link>
              <Link to='/teamstruct'><Menu.Item as='a'>Purple Team Structure</Menu.Item></Link>
              <Link to='/popquiz'><Menu.Item header>Pop Quiz!</Menu.Item></Link>
            </Container>
          </Menu>
        </Visibility>

        <Container color='white' text>
        <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>True or False</Card.Header>
        <Card.Meta>Skill: Fundamentals</Card.Meta>
        <Card.Description>
          Purple Teaming only helps the <strong>Blue Team</strong> get better
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            True
          </Button>
          <Button basic color='red'>
            False
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Should You...</Card.Header>
        <Card.Meta>Skill: Analytics</Card.Meta>
        <Card.Description>
         If you find a vulnerability in a Blue Team tool, should you: <strong>report it immediately</strong> or <strong>explore the exploit's domain</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Report It
          </Button>
          <Button basic color='red'>
            Explore It
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Imposter!</Card.Header>
        <Card.Meta>Skill: Memory</Card.Meta>
        <Card.Description>
          Which of the following tools is not one of the basic ones mentioned as good for purple teams just starting out?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Amass
          </Button>
          <Button basic color='blue'>
            Shodan
          </Button>
        </div>
        </Card.Content>
        <Card.Content>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Nikto
          </Button>
          <Button basic color='yellow'>
            BirdSuite
          </Button>
        </div>
        </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Hackerz Only</Card.Header>
        <Card.Meta>Skill: Sleuth</Card.Meta>
        <Card.Description>
          What would be the best way to start an attack on a blue team detection tool?
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Talk to Blue
          </Button>
          <Button basic color='blue'>
            Pick a Random Tool
          </Button>
        </div>
        </Card.Content>
        <Card.Content>
        <div className='ui two buttons'>
          <Button basic color='red'>
            Do a Risk Assessment
          </Button>
          <Button basic color='yellow'>
            I dunno?
          </Button>
        </div>
        </Card.Content>
    </Card>
  </Card.Group>
  </Container>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Footer Header' />
                  <p>
                    Extra space for a call to action inside the footer that could help re-engage
                    users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>
                Site Map
              </List.Item>
              <List.Item as='a' href='#'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='#'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='#'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
      </html>
      
    )
  }
}