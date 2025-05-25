import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface UserBadgeProps {
    name: string;
    avatar: string;

}

export default function UserBadge({ avatar, name }: UserBadgeProps) {
    return (
        <View>
            <Text>{name}</Text>

            <Text>{avatar}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})