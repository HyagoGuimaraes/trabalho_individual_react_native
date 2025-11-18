import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 60,
        backgroundColor: "#FFFFFF",
    },

    logo: {
        width: 120,
        height: 40,
        alignSelf: 'flex-start',
        marginBottom: 25,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 25,
        color: '#000',
    },

    socialButton: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 12,
    },

    socialText: {
        fontSize: 14,
        color: '#000',
    },

    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        justifyContent: "center",
    },

    line: {
        width: "25%",
        height: 1,
        backgroundColor: "#cfcfcf",
    },

    dividerText: {
        marginHorizontal: 10,
        color: "#6e6e6e",
    },

    input: {
        borderWidth: 1,
        borderColor: "#bcbcbc",
        padding: 12,
        borderRadius: 6,
        marginBottom: 15,
        fontSize: 14,
    },

    forgotPassword: {
        color: "#0a66c2",
        marginBottom: 15,
        fontWeight: '500',
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    checkboxSelected: {
        width: 18,
        height: 18,
        borderRadius: 3,
        backgroundColor: '#0a66c2',
        marginRight: 8,
    },

    checkboxText: {
        color: '#000',
    },

    loginButton: {
        backgroundColor: "#0A66C2",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },

    loginText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },

    signupText: {
        textAlign: "center",
        color: "#000",
        fontSize: 14,
    },

    signupLink: {
        color: "#0A66C2",
        fontWeight: "600",
    },
});