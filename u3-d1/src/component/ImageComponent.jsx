import { Component } from "react"
class ImageComponent extends Component{
    render(){
    console.log("THIS: ", this)
    console.log("PROPS: ", this.props)
    return (<div><img style={{width:this.props.width, height:this.props.height}} src={this.props.img} alt={this.props.imgAlt}/></div>)
    }
}
export default ImageComponent
