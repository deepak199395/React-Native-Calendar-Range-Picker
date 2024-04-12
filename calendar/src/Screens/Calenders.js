import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from "react-native-calendar-picker";

const Calendars = () => {
    const minDate = new Date(); // Today
    const maxDate = new Date(2026, 6, 3);
    
    // Define selectedStartdate and selectedEnddate using useState
    const [selectedStartdate, setSelectedStartdate] = useState('DD/MM/YYYY');
    const [selectedEnddate, setSelectedEnddate] = useState('DD/MM/YYYY');

    const onDateChange = (date, type) => {
        console.log(JSON.stringify(date));
        const newDate = JSON.stringify(date);
        const newDate1 = newDate.substring(1, newDate.length - 1);
        const dates = newDate1.split("T");
        const date1 = dates[0].split("-");
        const day = date1[2];
        const month = date1[1];
        const year = date1[0];
        console.log(day + '/' + month + '/' + year);

        if (type === 'END_DATE') {
            if (day === undefined) {
                setSelectedEnddate('DD/MM/YYYY');
            } else {
                setSelectedEnddate(day + '/' + month + '/' + year);
            }
        } else {
            setSelectedStartdate(day + '/' + month + '/' + year);
            setSelectedEnddate('DD/MM/YYYY');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={onDateChange} // corrected this line
                    textStyle={{
                        fontFamily: 'Arial',
                        color: '#333',
                    }}
                    selectedDayTextStyle={{
                        color: '#FFFFFF',
                    }}
                    selectedRangeStartTextStyle={{
                        backgroundColor: '#7300e6',
                    }}
                    selectedRangeEndTextStyle={{
                        backgroundColor: '#7300e6',
                    }}
                />
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>Start Date:</Text>
                <Text style={styles.date}>{selectedStartdate}</Text>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dateLabel}>End Date:</Text>
                <Text style={styles.date}>{selectedEnddate}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Confirm Dates</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Calendars

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    calendarContainer: {
        marginBottom: 20,
    },
    dateContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
    },
    dateLabel: {
        fontSize: 18,
        color: '#333',
        marginRight: 10,
    },
    date: {
        fontSize: 18,
        color: '#7300e6',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#7300e6',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
