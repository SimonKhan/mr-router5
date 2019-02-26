import * as React from "react";
import {routerStore, routeNode, RouteComponent} from "mr-router5";


export default routeNode("pkg", ({routeNodeName}) => {
    console.log("rendering pkg route node");
    return (
        <div>
            <h5>View Package</h5>
            <div onClick={() => routerStore.router.navigate("home")}>Back to Home</div>
            <hr />
            <RouteComponent routeNodeName={routeNodeName} />
        </div>
    );
});