function getButtonStyling(styleType) {
    if(styleType == 'primary'){
        return 'bg-blue-500';
    } else if(styleType === 'secondry'){
        return 'bg-gray-500';
    } else if(styleType === 'danger'){
        return 'bg-red-500';
    } else if(styleType === 'warning'){
        return 'bg-yellow-500';
    }
    else{
        return 'bg-green-500';
    }
}

export default getButtonStyling;