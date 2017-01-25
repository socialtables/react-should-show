# React Should Show

A component that controls conditionally rendering children.

### Install
` npm install react-should-show`

###  Props

#### `shouldShow`
something that evaluates truthy or falsy that will determine whether children render
#### `hiddenElement`
a react element to render when shouldShow is falsy, defaults to null
#### `children`
what will be rendered inside of this component


### Use

```js
import React, { Component } from "react";
import ShouldShow from "react-should-show";
export default class Fun extends Component {
	state = { shouldShow: false };
	render() {
		return (
			<div onClick={() => this.setState({ shouldShow: true })}
				<ShouldShow shouldShow={this.state.shouldShow}>
					<div>
						Wow great job
					</div>
				</ShouldShow>
			</div>
		);
	}
}
```

- - -

Copyright (C) 2017 Social Tables, Inc. (https://www.socialtables.com) All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.