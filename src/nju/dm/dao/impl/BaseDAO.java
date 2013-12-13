package nju.dm.dao.impl;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * ����DAO��ʵ������̳д���
 *
 */
public class BaseDAO extends HibernateDaoSupport{
	@SuppressWarnings("unused")
	@Resource(name="sessionFactory")
	/**
	 * ʹ��ע��ע��sessionFactory��HibernateDaoSupport��sessionFactory����Ϊfinal���޷���д��
	 * @param sessionFactory
	 */
	private void setSuperSessionFactory(SessionFactory sessionFactory){
		super.setSessionFactory(sessionFactory);
	}
}
