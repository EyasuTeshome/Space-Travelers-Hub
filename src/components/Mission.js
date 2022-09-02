import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    mission: {
      title, description, id, reserved,
    },
    index,
  } = props;

  const dispatch = useDispatch();

  const handleReservation = () => {
    if (reserved) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };
}
