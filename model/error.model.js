exports.NOT_VALID_REQUEST_STATUS = 400;
exports.SERVICE_NOT_AVAILABLE = 503;
exports.INTERNAL_SERVER_ERROR = 503;
exports.NOT_FOUND_STATUS = 404;

exports.NotValidRequest = (message)=>{
	return {
		error:"Not valid request",
		message: message ? message : "The element that you are sending is not valid for the action",
		status: NOT_VALID_REQUEST_STATUS
	}
};

exports.ServiceNotAvailable = (message)=>{
	return {
		error:"Error trying to save changes",
		message: message ? message : 'Couldn\'t persist the element',
		status: this.SERVICE_NOT_AVAILABLE
	};
};


exports.ImposibleToSaveError = (message)=>{
	return {
		error:"Error trying to save changes",
		message: message ? message : 'Couldn\'t persist the element',
		status: this.NOT_FOUND_STATUS
	};
};

exports.NotFoundError= (message)=>{
	return {
		error:"Not found element",
		message: message ? message : "The element that you are trying to access was not found",
		status: this.NOT_FOUND_STATUS
	};
}

exports.UnhanddleError= (message)=>{
	return {
		error:"Unhandled error",
		message: message ? message : "We had an error in the transaction, please retry again or contact with your system administrator",
		status: this.INTERNAL_SERVER_ERROR
	};
};

exports.FilterPrototypeForResponse = (prototypeError) => {
	return {
		error: prototypeError.error,
		message: prototypeError.message
	};
};

