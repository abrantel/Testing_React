import React, {Component} from 'react';

class Tasks extends Component {
    render() {
        const {task} = this.props;

        return <div>
         {task.title} - 
         {task.description} - 
         {task.done} - 
         {task.id}
                <input type="checkbox" />
                <button>
                    X
                </button>
                </div>
    }
}

export default Tasks;