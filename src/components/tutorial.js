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
  Segment,
  Visibility,
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
    src='../../info.png'
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

        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>What Does it Mean to "Purple Team"??</Header>
          <Image src='../../perp.png' />
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
              <Menu.Item header>Background</Menu.Item>
              <Link to='/teamstruct'><Menu.Item as='a'>Purple Team Structure</Menu.Item></Link>
              <Link to='/popquiz'><Menu.Item as='a'>Pop Quiz!</Menu.Item></Link>

              {/* <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu> */}
            </Container>
          </Menu>
        </Visibility>

        <Container color='white' text>
        <Image
            floated='right'
            size='medium'
            src='../../logo.png'
            style={{ margin: '2em -4em 2em 2em' }}
          />
          <p>
          The drastic and chaotic onslaught of technological dependency in the world caused businesses to harbor a deeper appreciation for digital security. Suddenly meetings with sensitive information have to occur over mediums like Zoom and Webex, employees are being forced access company property over the internet, and CEOs are attempting to understand the difference between a vulnerability and an exploit. Due to the newfound emphasis on data security, companies have adopted a more security-focused business plan with attention and resources poured into red, blue, and purple teams. Some are familiar with the basic red versus blue team dynamic. Companies hire a group of security professionals known as the “red team” to hack various technological assets and write a report on their findings. They then have another team, the “blue team” ready to mitigate and resolve any exploits the red team finds, thus defending the company’s assets. The introduction of the purple team came from a realization that red and blue team activity is instigated by whatever the red team decides to test. So if the red team attacks with A and B types of attack, blue team learns to use various tools to help detect A and B attacks in the future. But when the red and blue team move on to the next set of attacks, who ensures that those attacks, and any evolutions of
them, are actually properly caught by the tools the blue team instated? That’s where the purple team comes in, using red team tactics to further test the defensive tools that the blue team introduces. Deep Purple was created by our team to make the process of creating a purple team easier on companies during this digitally dependent period of business. The web application incorporates the ability for a team to create custom campaigns, track progress of each member, receive badges for properly conducting various processes, and report on all findings made throughout each campaign. This was all done with simplicity and understanding in mind, where minimal thought would be needed to navigate the application, instead focusing that energy on the actual purple teaming. Deep Purple was built with dependable and reactive technologies such as React.js, Redux, and Firebase in order to provide an enjoyable learning experience for those new to purple teaming.
          </p>
          
          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div ref={this.handleOverlayRef} style={overlayFixed ? fixedOverlayStyle : overlayStyle}>
            <Menu
              icon='labeled'
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item>
                <Icon name='twitter' />
                Twitter
              </Menu.Item>

              <Menu.Item>
                <Icon name='facebook' />
                Share
              </Menu.Item>

              <Menu.Item>
                <Icon name='mail' />
                Email
              </Menu.Item>
            </Menu>
          </div>

          {_.times(3, (i) => (
            <Paragraph key={i} />
          ))}
          <LeftImage src='../../public/logo.png'/>

          <Paragraph />
          <RightImage />

          {_.times(4, (i) => (
            <Paragraph key={i} />
          ))}
          <LeftImage />

          <Paragraph />
          <RightImage />

          {_.times(2, (i) => (
            <Paragraph key={i} />
          ))}
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