package nju.dm.service;

import java.io.File;
import java.util.List;

import nju.dm.domain.User;

import org.springframework.dao.DataAccessException;

public interface IUserService {

	/*//ȡ�������û��ļ�¼��
	public Integer getAllUsersCount();
	//ȡ�������û��ļ�¼����ģ����ѯ��
	public Integer getAllUsersCount(User user);

	//ȡ�õ�ǰҳ�û�����Ϣ
	public List<User> getAllUsers(Integer page, Integer rows);
	//ȡ�õ�ǰҳ�û�����Ϣ(ģ����ѯ
	public List<User> getAllUsers(Integer page, Integer rows,User user);

	//�����û�������Ϣ(����ѡ��Ľ�ɫ��Ϣ)
	public void updateUser(User user, String selrolesid)throws DataAccessException;

	//ɾ���û�
	public void removeUser(String userid);

	//����û�(������ɫ��Ϣ��
	public void addUser(User user);

	//�����û��ϴ���excel�ļ�����������û�
	public void handleUsersExcelFile(File handlingFile);
	*/
	public boolean isUserExist(String username);
	
}
