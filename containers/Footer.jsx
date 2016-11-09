import React from 'react'
import {Grid, Col, Row} from 'react-bootstrap'

const Footer = (props) => {
  return (
    <div id="footer" className="clearfix">
      <div id="footer-widgets">
        <Grid>
          <div id="footer-wrapper">
            <Row>
              <Col sm={6} md={3}>
                <div>
                  <h4 className="widgettitle">Footer Widget 1</h4>
                  <ul>
                    <li>
                      <a href="#">Log in</a>
                    </li>
                    <li>
                      <a href="#">Entries
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">Comments
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm={6} md={3}>
                <div id="recent-posts-3" className="widget widgetFooter widget_recent_entries">
                  <h4 className="widgettitle">Footer Widget 2</h4>
                  <ul>
                    <li>
                      <a href="#">Links Post</a>
                    </li>
                    <li>
                      <a href="#">Blockquote Post</a>
                    </li>
                    <li>
                      <a href="#">UL and OL Post</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm={6} md={3}>
                <div id="meta-4" className="widget widgetFooter widget_meta">
                  <h4 className="widgettitle">Footer Widget 3</h4>
                  <ul>
                    <li>
                      <a href="#">Log in</a>
                    </li>
                    <li>
                      <a href="#">Entries
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                    <li>
                      <a href="#">Comments
                        <abbr title="Really Simple Syndication">RSS</abbr>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm={6} md={3}>
                <div id="search-3" className="widget widgetFooter widget_search">
                  <h4 className="widgettitle">Footer Widget 4</h4>
                  <form action="http://localhost:3000/api/search" method="get" className="form-inline">
                    <fieldset>
                      <div className="input-group">
                        <input type="text" name="s" id="search" placeholder="Search" value="" className="form-control" />
                        <span className="input-group-btn">
                          <button type="submit" className="btn btn-primary">Search</button>
                        </span>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </Col>

            </Row>
          </div>

        </Grid>
      </div>

      <div id="sub-floor">
        <Row>
          <Col sm={2} smOffset={6}>
            © 2016
            <a target="_blank" href="http://vanio.hu">VANIO</a>
          </Col>
        </Row>
        <Row>
          <Col sm={2} smOffset={5}>
            Built by Maesy
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default Footer
