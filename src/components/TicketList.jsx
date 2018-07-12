import React from 'react';
import PropTypes from 'prop-types';

import Ticket from './Ticket';


function TicketList(props){
  return (
    <div>
      {Object.keys(props.ticketList).map((ticketId) => {
        let ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticketId}
          ticketId={ticketId} />;
      })}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
};

export default TicketList;
