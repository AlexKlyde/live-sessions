import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  // input: init state
  // output: arr(state value, func to update state)
  const [userInfo, setUserInfo] = useState({
    avatar: null,
    name: null,
    location: null,
  });

  const { userId } = useParams();
    // useEffect
    // input: func, arr
    // output: undefined, function

    // callback
    // input: none
    // output: undefined,
    useEffect(() => {
      console.log('componentDidMount');

      console.log('componentDidUpdate - when params in array changed');

      fetch(`https://api.github.com/users/${userId}`)
        .then(res => res.json())
        .then(userData => {
          const { avatar_url, name, location } = userData;

          setUserInfo({
            avatar: avatar_url,
            name: name,
            location: location,
          });
        });
      
      // return () => {
      //   console.log('componentWillUnmount');
      // };
    }, [userId]);

  const { avatar, name, location } = userInfo;
  if (!avatar || !name || !location) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

/* class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      name: null,
      location: null,
    };
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const currentUser = this.props.match.params.userId;

    if (prevUser !== currentUser) {
      this.getUserData(currentUser);
    }
  }

  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;

        this.setState({
          avatar: avatar_url,
          name: name,
          location: location,
        });
      });
  };

  render() {
    const { avatar, name, location } = this.state;
    if (!avatar || !name || !location) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
} */

export default User;
