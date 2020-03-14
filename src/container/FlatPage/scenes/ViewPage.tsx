import React, { Component } from "react";
import { Props } from "../index";
import { Input, Button, Row, Col, Table, Pagination } from "antd";
import { Wrapper, ActionsButton } from "../style";
import InfiniteScroll from "react-infinite-scroll-component";
import { actionCreators } from "../action";
import { connect } from "react-redux";
import AddPageForm from "./AddPage";
const { Search } = Input;
const { Column } = Table;

interface ViewPageProps extends Props {
  isLoading: boolean;
  data: Array<Object>;
  isDataLoading: boolean;
  page: number;
  dataLoad: (page: Number, query: String) => void;
  hasMore: boolean;
  deleteFlat: (id: Number, index: number, data: any) => void;
}

class ViewPage extends Component<ViewPageProps> {
  state = {
    query: "",
    modal: false
  };

  handleSearch() {}

  componentDidMount() {
    console.log(this.props.data.length);
    if (this.props.data.length === 0) {
      this.props.dataLoad(1, this.state.query);
    }
  }

  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <Wrapper>
        <Row gutter={[15, 10]} style={{ paddingBottom: "20px" }}>
          <Col xs={24} md={16} lg={20}>
            <Search
              allowClear
              size="large"
              onChange={this.changeHandler}
              placeholder="Search"
              value={this.state.query}
              onSearch={() => this.props.dataLoad(1, this.state.query)}
            />
          </Col>
          <Col xs={24} md={4} lg={2}>
            <Button
              type="primary"
              size="large"
              loading={this.props.isLoading}
              onClick={() => this.props.dataLoad(1, this.state.query)}
            >
              Refresh{" "}
            </Button>
          </Col>
          <Col xs={24} md={4} lg={2}>
            <Button
              type="primary"
              size="large"
              onClick={() =>
                this.props.history.push(`${this.props.match.url}/add`)
              }
            >
              {" "}
              Add Flat{" "}
            </Button>
          </Col>
        </Row>
        <InfiniteScroll
          dataLength={this.props.data.length}
          next={() =>
            this.props.dataLoad(this.props.page + 1, this.state.query)
          }
          loader={<h2></h2>}
          hasMore={this.props.hasMore}
        >
          <Table
            bordered
            dataSource={this.props.data}
            loading={this.props.isDataLoading}
            pagination={false}
          >
            <Column
              title="S. No."
              render={(_: any, __: any, index: number) => (
                <div>{index + 1}</div>
              )}
              key="id"
            />
            <Column title="Flat Number" dataIndex="flatNo" key="flatNo" />
            <Column title="Floor" dataIndex="floor" key="floor" />
            <Column title="Room Type" dataIndex="roomType" key="roomType" />
            <Column
              title="Buildup Area"
              dataIndex="buildupArea"
              key="buildupArea"
            />
            <Column
              title="Carpet Area"
              dataIndex="carpetArea"
              key="carpetArea"
            />
            <Column
              title="Entrance Direction"
              dataIndex="entranceDirection"
              key="entranceDirection"
            />
            <Column
              title="Actions"
              key="action"
              render={(_: any, record: any, index: number) => (
                <ActionsButton>
                  <Button type="default">Edit</Button>
                  <Button
                    type="danger"
                    onClick={() =>
                      this.props.deleteFlat(record.id, index, this.props.data)
                    }
                  >
                    Delete
                  </Button>
                </ActionsButton>
              )}
            />
          </Table>
        </InfiniteScroll>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { loading, flatsData, page, hasMore, loadingData } = state.get("flats");
  return {
    isLoading: loading,
    data: flatsData,
    isDataLoading: loadingData,
    page,
    hasMore
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dataLoad: (page: Number, query: String) =>
      dispatch(actionCreators.dataRequest(page, query)),
    deleteFlat: (id: Number, index: number, data: any) =>
      dispatch(actionCreators.deleteRequest(id, data, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewPage);
