import { useQuery } from '@tanstack/react-query'

import { userService } from '@/service/user.service'

export default function useProfile() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile()
	})

	return { data, isLoading, isSuccess }
}
