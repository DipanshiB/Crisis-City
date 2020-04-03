import React from 'react';

class Chat extends React.Component {

    // const [user, setUser] = useState(false);

    render(){
        return(
            <>
            <div className='centered-form'>
                <div className='centered-form_box'>
                    <h1>JOIN</h1>
                    <form>
                        <label>DISPLAY NAME</label>
                        <input type='text' name='username' placeholder='Enter user name' />
                        <label>ROOM</label>
                        <input type='text' name='room' placeholder='Enter room name' required />
                        <input type='submit'>JOIN</input>
                    </form>
                </div>
            </div> 

            <div class="chat">
                <div id="sidebar" class="chat__sidebar"></div>

                <div class="chat__main">
                    <div id="messages" class="chat__messages"></div>
                    <div class="compose">
                        <form id="message-form">
                            <input name="message" placeholder="message" required autocomplete="off" />
                            <button>Send</button>
                        </form>
                        <button id="send-location">Send Location</button>
                    </div>
                </div>
            </div>
            </>

        )
    }
}

export default Chat;

  
