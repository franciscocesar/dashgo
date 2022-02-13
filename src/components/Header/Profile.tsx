import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData = true} : ProfileProps){
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Francisco César</Text>
                    <Text color="gray.300" fontSize="small">francisco.mateus@souunit</Text>
                </Box>
            )}
            
            <Avatar size="md" name="Francisco César" src='https://github.com/franciscocesar.png'/>
        </Flex>
    )
}