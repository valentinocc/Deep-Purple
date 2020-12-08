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
    src='../../med.png'
    style={{ margin: '2em 2em 2em -4em' }}
  />
)

const RightImage = () => (
  <Image
    floated='right'
    size='medium'
    src='../../mask.jpg'
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

        <Container text style={{ marginTop: '2em', color: 'white' }}>
          <Header as='h1'>What makes up a Purple Team?</Header>
          <Image src='../../perpGoal.svg' />
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
              <Link to='/teamstruct'><Menu.Item header>Purple Team Structure</Menu.Item></Link>
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
            <p>The first—hopefully obvious—thing to notice is that purple is a blending of red and blue. But just like the diagram above, you want to think of it as an overlap between Red and Blue, and not as its own separate thing.</p>
            <Header>Origin and Meaning</Header>
          <p><b>Purple Team -</b>
           Traditionally, a Purple Team is considered a penetration testing team
collaborating with a subset of the Blue Team and conducting a concrete, point-in-time
assessment. The Red Team explains what attacks they are executing in real-time, with a goal of
determining whether the Blue Team can either prevent or detect the attack in question. This
paper will challenge this limited traditional role and discuss an broader, more effective use of
the Purple Team concept. We argue that through a more expansive approach that leverages both
technology and process, we can enhance the value from traditional purple operations and
establish a new paradigm for achieving the mission of the cybersecurity program.
          </p>
          <RightImage src='../../public/logo.png' />
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

          <p>
          The US Congress has proposed numerous bills that expand upon cybersecurity regulation. The Consumer Data Security and Notification Act amends the Gramm-Leach-Bliley Act to require disclosure of security breaches by financial institutions. Congressmen have also proposed "expanding Gramm-Leach-Bliley to all industries that touch consumer financial information, including any firm that accepts payment by a credit card."[11] Congress has proposed cybersecurity regulations similar to California's Notice of Security Breach Act for companies that maintain personal information. The Information Protection and Security Act requires that data brokers "ensure data accuracy and confidentiality, authenticate and track users, detect and prevent unauthorized activity, and mitigate potential harm to individuals."[12]

In addition to requiring companies to improve cybersecurity, Congress is also considering bills that criminalize cyberattacks. The Securely Protect Yourself Against Cyber Trespass Act (SPY ACT) was a bill of this type. It focused on phishing and spyware bill and was passed on May 23, 2005 in the US House of Representatives but died in the US Senate.[6] The bill "makes unlawful the unauthorized usage of a computer to take control of it, modify its setting, collect or induce the owner to disclose personally identifiable information, install unsolicited software, and tamper with security, anti-spyware, or anti-virus software."[13]

On May 12, 2011, US Barack Obama proposed a package of cybersecurity legislative reforms to improve the security of US persons, the federal government, and critical infrastructure. A year of public debate and Congress hearings followed, resulting in the House of Representative passing an information sharing bill and the Senate developing a compromise bill seeking to balance national security, privacy, and business interests.

In July 2012, the Cybersecurity Act of 2012 was proposed by Senators Joseph Lieberman and Susan Collins.[14] The bill would have required creating voluntary "best practice standards" for protection of key infrastructure from cyber attacks, which businesses would be encouraged to adopt through incentives such as liability protection.[15] The bill was put to a vote in the Senate but failed to pass.[16] Obama had voiced his support for the Act in a Wall Street Journal op-ed[17], and it also received support from officials in the military and national security including John O. Brennan, the chief counterterrorism adviser to the White House.[18][19] According to The Washington Post, experts said that the failure to pass the act may leave the United States "vulnerable to widespread hacking or a serious cyberattack." [20] The act was opposed by Republican senators like John McCain who was concerned that the act would introduce regulations that would not be effective and could be a "burden" for businesses.[21] After the Senate vote, Republican Senator Kay Bailey Hutchison stated that the opposition to the bill was not a partisan issue but it not take the right approach to cybersecurity.[22]The senate vote was not strictly along partisan lines, as six Democrats voted against it, and five Republicans voted for it.[23] Critics of the bill included the US Chamber of Commerce,[24] advocacy groups like the American Civil Liberties Union and the Electronic Frontier Foundation,[25] cybersecurity expert Jody Westby, and The Heritage Foundation, both of whom argued that although the government must act on cybersecurity, the bill was flawed in its approach and represented "too intrusive a federal role."[26]
          </p>
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